// app/api/contact/route.js  (for Next.js Pages Router)

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // nodemailer needs Node runtime
export const dynamic = "force-dynamic";

export async function POST(request) {
  
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // Create transporter (use Gmail, SMTP, etc.)
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any SMTP service
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your app password (not Gmail password!)
      },
    });

    // Email content
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // who receives
      subject: `Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
