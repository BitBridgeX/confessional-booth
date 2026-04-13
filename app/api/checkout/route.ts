import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { items, successUrl, cancelUrl } = await request.json();

    // When STRIPE_SECRET_KEY is set, this creates a real Stripe session:
    /*
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: successUrl || `${process.env.NEXT_PUBLIC_URL}/merch/checkout?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_URL}/merch/checkout`,
    });
    return NextResponse.json({ url: session.url });
    */

    // Mock response for development
    return NextResponse.json({
      url: "/merch/checkout?success=true",
      sessionId: "cs_mock_" + Date.now(),
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
