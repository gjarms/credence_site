import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO_EMAIL',
] as const;

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

export async function POST(request: Request) {
  const missingEnvVars = getMissingEnvVars();

  if (missingEnvVars.length > 0) {
    return NextResponse.json(
      {
        error: `Missing required email configuration: ${missingEnvVars.join(', ')}`,
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as {
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    message?: string;
  };

  const firstName = body.firstName?.trim() ?? '';
  const lastName = body.lastName?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const company = body.company?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  if (!firstName || !lastName || !email || !company || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!;
  const replyToAddress = process.env.CONTACT_REPLY_TO_EMAIL || email;
  const toAddress = process.env.CONTACT_TO_EMAIL!;

  await transporter.sendMail({
    from: fromAddress,
    to: toAddress,
    replyTo: replyToAddress,
    subject: `Credence Talent inquiry from ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
