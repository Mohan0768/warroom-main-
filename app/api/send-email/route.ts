import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Email schema validation
const emailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  organization: z.string().min(2, 'Organization must be at least 2 characters'),
  event: z.string().min(10, 'Message must be at least 10 characters'),
})

type EmailData = z.infer<typeof emailSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData: EmailData = emailSchema.parse(body)
    
    // For development/testing, log the data
    // In production, you should use a real email service
    console.log('[v0] Email submission received:', validatedData)
    
    // Configure your email service here
    // This is a placeholder - replace with your email configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || validatedData.email,
      to: 'golinaipersonal@gmail.com',
      subject: `New Speaking Inquiry from ${validatedData.name}`,
      html: `
        <h2>New Speaking Inquiry</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Organization:</strong> ${validatedData.organization}</p>
        <h3>Event Details:</h3>
        <p>${validatedData.event.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Speaking Inquiry

Name: ${validatedData.name}
Email: ${validatedData.email}
Organization: ${validatedData.organization}

Event Details:
${validatedData.event}
      `,
    }
    
    // Try to send email if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      await transporter.sendMail(mailOptions)
      console.log('[v0] Email sent successfully')
    } else {
      console.log('[v0] Email credentials not configured. In production, configure EMAIL_USER and EMAIL_PASSWORD.')
    }
    
    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully! We will contact you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit inquiry. Please try again later.',
      },
      { status: 500 }
    )
  }
}
