import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, projectDetails } = req.body;

  if (!name || !email || !projectDetails) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / Brand: ${company || 'Not provided'}`,
        '',
        'Project Details:',
        projectDetails,
      ].join('\n'),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}
