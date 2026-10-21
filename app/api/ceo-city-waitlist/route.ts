import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address').max(254),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = waitlistSchema.parse(body)

    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_FROM) {
      return NextResponse.json({ success: false, message: 'Waitlist sign-up is temporarily unavailable. Please try again later.' }, { status: 503 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || '587', 10),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
    })

    const registeredAt = new Date().toISOString()
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'kk@humanfirstbykk.com',
      replyTo: email,
      subject: 'New CEO City Waitlist Registration',
      text: `New CEO City Waitlist Registration\n\nVisitor email: ${email}\nRegistration date and time: ${registeredAt}\nSource: HumanFirst by KK — Experience / CEO City`,
      html: `<h2>New CEO City Waitlist Registration</h2><p><strong>Visitor email:</strong> ${email}</p><p><strong>Registration date and time:</strong> ${registeredAt}</p><p><strong>Source:</strong> HumanFirst by KK — Experience / CEO City</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: error.issues[0]?.message || 'Please enter a valid email address.' }, { status: 400 })
    }

    console.error('[v0] CEO City waitlist email error:', error)
    return NextResponse.json({ success: false, message: 'We could not join you to the waitlist. Please try again.' }, { status: 500 })
  }
}
