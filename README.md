# Credence Talent Website

This is a Next.js + Tailwind site for Credence Talent.

## Files included
- `app/page.tsx` - homepage
- `app/layout.tsx` - page metadata and favicon
- `app/globals.css` - global styles
- `app/api/contact/route.ts` - contact form email handler
- `public/credence-logo.svg` - logo asset
- `public/favicon.ico` - favicon asset

## Run locally
1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000`

## Contact form setup
The site submits inquiries through a Next.js API route using SMTP.

Create a local `.env.local` file with:

```bash
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
CONTACT_TO_EMAIL=hradmin@credencetalent.com
CONTACT_FROM_EMAIL=hradmin@credencetalent.com
CONTACT_REPLY_TO_EMAIL=hradmin@credencetalent.com
```

Notes:
- `CONTACT_FROM_EMAIL` is optional. If omitted, the app uses `SMTP_USER`.
- `CONTACT_REPLY_TO_EMAIL` is optional. If omitted, replies go directly to the person who submitted the form.
- Port `465` uses secure SMTP automatically. Other ports use STARTTLS when supported by your provider.

## Deploy
1. Push this folder to a GitHub repository.
2. Deploy it to your preferred platform.
3. Add the SMTP environment variables in that platform's project settings.
4. Confirm the contact form sends email successfully in production.

## Suggested next updates
- Confirm `hradmin@credencetalent.com` is the correct destination mailbox for inquiries.
- Replace sample testimonials with approved client quotes or swap the section for case-study content.
- Add a social share image.
- Add analytics if needed.
