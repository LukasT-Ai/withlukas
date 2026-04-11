import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "WithLukas Newsletter <lukas.t@withlukas.com>",
      to: "lamintraore@withlukas.com",
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B3A5C; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; color: white; font-size: 18px;">New Newsletter Subscriber</h2>
          </div>
          <div style="padding: 24px; background: #fff; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 14px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="font-size: 12px; color: #999; margin-top: 16px;">Subscribed via withlukas.com footer</p>
          </div>
        </div>
      `,
      text: `New newsletter subscriber: ${email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Newsletter signup error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
