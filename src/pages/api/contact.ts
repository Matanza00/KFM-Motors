// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = { success: boolean; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST')
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !message)
    return res
      .status(400)
      .json({ success: false, error: 'Name, email and message are required.' });

  // configure transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER!,
      pass: process.env.GMAIL_PASS!,
    },
  });

  try {
    await transporter.sendMail({
      from: `"KFM Motors Contact" <${process.env.GMAIL_USER}>`,
      to: 'usmannadeem3621@gmail.com',      // your destination email
      subject: `New Contact: ${name} – ${service || 'No service selected'}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Service:</strong> ${service || '—'}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Mail error:', err);
    return res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
}
