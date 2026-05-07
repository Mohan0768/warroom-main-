# HumanFirst Website - Setup Guide

## Quick Start

Your website is ready to deploy! Follow these steps to complete the setup:

---

## Step 1: Environment Variables

Add these to your Vercel project settings (Settings → Environment Variables):

### Email Configuration (REQUIRED for contact form)
```
EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
EMAIL_SECURE = false
EMAIL_USER = your-email@gmail.com
EMAIL_PASSWORD = your-app-password
EMAIL_FROM = noreply@humanfirst.app
EMAIL_TO_ADDRESS = your-email@example.com
```

**How to set up Gmail app password:**
1. Go to https://myaccount.google.com/security
2. Enable 2-factor authentication
3. Create app password for "Mail" on "Windows PC"
4. Use the 16-character password in `EMAIL_PASSWORD`

**Alternative:** Use SendGrid, Mailgun, or any SMTP service

### Calendly Configuration (REQUIRED for booking)
```
NEXT_PUBLIC_CALENDLY_URL = https://calendly.com/yourname/meeting
```

**Get your Calendly URL:**
1. Go to calendly.com and sign up
2. Create a meeting type (e.g., "30 min call")
3. Copy your calendar URL
4. Add it as the environment variable above

---

## Step 2: Test Email Functionality

1. Go to http://localhost:3000/#hire (or scroll to "Hire me to speak" section)
2. Fill out the contact form with valid data
3. Click "SEND INQUIRY"
4. Check your email inbox (EMAIL_TO_ADDRESS)
5. Verify the email arrives correctly

**If email fails:**
- Check environment variables are set correctly
- Verify email credentials are valid
- Check spam/junk folder
- Review server logs: `pnpm dev` (check console output)

---

## Step 3: Test Calendly Integration

1. Scroll to "Book a 1-on-1 Meeting" section
2. The Calendly widget should load
3. Try selecting a date/time (you can close without booking)
4. Test on mobile (375px viewport)

**If Calendly doesn't show:**
- Verify `NEXT_PUBLIC_CALENDLY_URL` is set
- Check browser console for CORS errors
- Try opening Calendly URL directly in browser
- Ensure URL format is correct: `https://calendly.com/yourname`

---

## Step 4: Test Chatbot

1. Scroll to any section
2. Look for a red circular button in bottom-right corner
3. Click to open chat window
4. Try asking: "What's the WAR ROOM?"
5. Click quick reply buttons
6. Test on mobile device

**Features to test:**
- Open/close animation
- Quick reply buttons
- Custom message input
- Mobile responsiveness
- Multiple conversations

---

## Step 5: Test Form Validation

1. Go to contact form section ("Hire me to speak")
2. Try submitting empty form → See validation errors
3. Try invalid email → See email error
4. Fill all fields correctly → Submit successfully
5. See success message and form clears

**Validation rules:**
- Name: 2+ characters
- Email: valid format
- Organization: 2+ characters
- Event details: 10+ characters

---

## Step 6: Verify All Features

### Navigation
- [ ] Header navigation links work
- [ ] Mobile menu opens/closes
- [ ] Smooth scrolling between sections
- [ ] All buttons are clickable

### Email Form
- [ ] Form validation shows errors
- [ ] Success message displays
- [ ] Email sends (check inbox)
- [ ] Form clears after submission

### Calendly
- [ ] Calendar widget loads
- [ ] Mobile responsive
- [ ] Can select dates/times
- [ ] Shows in proper section

### Chatbot
- [ ] Opens with smooth animation
- [ ] Quick reply buttons work
- [ ] Custom messages send
- [ ] Responses appear instantly
- [ ] Mobile responsive

### Responsive Design
- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All text readable
- [ ] Images scale properly

### SEO
- [ ] Page title shows in browser tab
- [ ] Meta description visible in search
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`

---

## Deployment to Vercel

### Option A: Deploy via Git
```bash
git push origin main
# Vercel automatically deploys on push
```

### Option B: Deploy via CLI
```bash
pnpm install -g vercel
vercel
# Follow prompts to deploy
```

### Option C: Deploy via Vercel Dashboard
1. Go to vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables in Settings
5. Click "Deploy"

---

## Troubleshooting

### Email not sending
- [ ] Check EMAIL_USER and EMAIL_PASSWORD are correct
- [ ] Verify EMAIL_TO_ADDRESS is valid
- [ ] Check spam/junk folder
- [ ] Review server logs for errors
- [ ] Try different email service (Gmail, SendGrid, etc.)

### Calendly not showing
- [ ] Verify NEXT_PUBLIC_CALENDLY_URL is set correctly
- [ ] Clear browser cache
- [ ] Check browser console for errors
- [ ] Ensure Calendly account is active
- [ ] Try in incognito/private mode

### Form validation not working
- [ ] Check browser console for JavaScript errors
- [ ] Verify form field names are correct
- [ ] Test in different browser
- [ ] Clear browser cache and cookies
- [ ] Check server logs

### Chatbot not appearing
- [ ] Look for red button in bottom-right corner
- [ ] Check browser console for errors
- [ ] Verify Lucide icons are loading
- [ ] Try different browser
- [ ] Check if chat is being hidden by other elements

---

## Performance Monitoring

After deployment, monitor these metrics:

1. **Page Load Speed** (Google PageSpeed Insights)
   - Target: >80 score
   - Use `next/image` for images
   - Minimize JavaScript bundles

2. **Error Monitoring** (recommended: Sentry)
   - Track form submission errors
   - Monitor email failures
   - Track chatbot issues

3. **Analytics** (recommended: Google Analytics)
   - Track form submissions
   - Monitor chatbot interactions
   - Measure Calendly bookings

4. **Email Delivery** (if using service)
   - Verify delivery rates
   - Check for bounces
   - Monitor spam scores

---

## Security Checklist

- [ ] API endpoint `/api/send-email` validates all inputs
- [ ] Form uses CSRF protection (Next.js built-in)
- [ ] Email password stored in environment variables (never in code)
- [ ] No sensitive data logged to console (remove debug logs before production)
- [ ] API rate limiting recommended (add in production)
- [ ] Email verification recommended for production

---

## Content Updates

To update website content, edit these files:

- **Homepage text:** `/components/hero-section.tsx`
- **About section:** `/components/about-section.tsx`
- **Services/Offerings:** `/components/offerings-section.tsx`
- **FAQ items:** `/components/faq-section.tsx`
- **Chatbot FAQ:** `/components/chatbot.tsx` (search for `FAQ_DATABASE`)
- **Navigation links:** `/components/header.tsx`
- **Footer content:** `/components/footer.tsx`

---

## Next Steps

1. Add environment variables to Vercel
2. Test all features locally (`pnpm dev`)
3. Deploy to Vercel
4. Monitor form submissions
5. Collect user feedback
6. Iterate and improve

---

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Calendly API:** https://developer.calendly.com
- **Nodemailer:** https://nodemailer.com
- **Zod Validation:** https://zod.dev

---

## Contact

For questions or issues, refer to the AUDIT_REPORT.md file for detailed information about each feature implementation.

Happy deploying! 🚀
