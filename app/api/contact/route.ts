import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, services, message } = await req.json();

    if (!name || !email || !services?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceList = services.map((s: string) => `  - ${s}`).join("\n");

    await resend.emails.send({
      from: "WithLukas Contact Form <noreply@withlukas.com>",
      to: "lamintraore@withlukas.com",
      replyTo: email,
      subject: `New Inquiry: ${services.join(", ")} - ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B3A5C; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; color: white; font-size: 18px;">New Contact Form Submission</h2>
            <p style="margin: 4px 0 0; color: #93C5FD; font-size: 13px;">withlukas.com</p>
          </div>
          <div style="padding: 24px; background: #fff; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 100px;"><strong>Name</strong></td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Company</strong></td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
              <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Services</strong></td><td style="padding: 8px 0;">${services.join(", ")}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 6px;">
              <strong style="font-size: 13px; color: #666;">Message:</strong>
              <p style="margin: 8px 0 0; font-size: 14px; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background: #f0f0f0; padding: 12px 24px; border-radius: 0 0 8px 8px; font-size: 12px; color: #999;">
            Sent from withlukas.com contact form
          </div>
        </div>
      `,
      text: `New inquiry from ${name} (${email})${company ? ` at ${company}` : ""}\n\nServices:\n${serviceList}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Contact form error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
