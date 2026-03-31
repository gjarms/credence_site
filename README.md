# Credence Talent Website

This is a Next.js + Tailwind starter for the Credence Talent site.

## Files included
- `app/page.tsx` – homepage
- `app/layout.tsx` – page metadata and favicon
- `app/globals.css` – Tailwind and global styles
- `public/credence-logo.png` – logo asset
- `public/favicon.ico` – favicon asset

## Run locally
1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000`

## Connect the contact form
The contact form currently points to:
`https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID`

To make it work:
1. Create a Formspree account.
2. Create a new form.
3. Copy the form ID.
4. Replace `REPLACE_WITH_YOUR_FORM_ID` in `app/page.tsx`.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Sign in to Vercel.
3. Click **Add New Project**.
4. Import the GitHub repo.
5. Keep the defaults and deploy.
6. In Vercel project settings, add your custom domain.

## Suggested next updates
- Replace placeholder testimonials with real ones.
- Replace `hello@credencetalent.com` with your real email.
- Add a social share image.
- Add Google Analytics or Plausible.
