import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

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
      success_url: `${req.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/payment/cancel`,
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
    "Telecom Consulting": { Starter: 250000, Growth: 750000, Enterprise: 1500000 },
    "Sales Automation": { Starter: 300000, Growth: 1000000, Enterprise: 2500000 },
    "App Development": { Starter: 500000, Growth: 1500000, Enterprise: 5000000 },
    "AI Integration": { Starter: 500000, Growth: 1500000, Enterprise: 5000000 },
    "SEO & Web Presence": { Starter: 200000, Growth: 500000, Enterprise: 1000000 },
    "Workflow Automation": { Starter: 250000, Growth: 750000, Enterprise: 2000000 },
  };
  return prices[service]?.[tier] ?? 250000;
}
