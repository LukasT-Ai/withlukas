import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 503 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { service, tier, email } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${service} - ${tier} Package`,
              description: `WithLukas ${service} engagement (${tier} tier)`,
            },
            unit_amount: getPrice(service, tier),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `https://www.withlukas.com/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://www.withlukas.com/payment/cancel`,
      metadata: { service, tier },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function getPrice(service: string, tier: string): number {
  const prices: Record<string, Record<string, number>> = {
    "Telecom Consulting": { Assessment: 150000, Strategy: 500000, "Full Engagement": 1200000 },
    "Sales Automation": { Starter: 200000, Growth: 650000, Scale: 1500000 },
    "Web & App Development": { Website: 150000, "Web App": 750000, Platform: 2500000 },
    "AI Integration": { Pilot: 250000, Production: 800000, Enterprise: 2000000 },
    "SEO & Web Presence": { Audit: 75000, Optimize: 300000, Dominate: 750000 },
    "Workflow Automation": { "Quick Win": 150000, Streamline: 500000, Transform: 1500000 },
  };
  return prices[service]?.[tier] ?? 250000;
}
