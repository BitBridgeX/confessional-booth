import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  // TODO: Verify Stripe webhook signature
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  // const event = stripe.webhooks.constructEvent(body, sig!, process.env.STRIPE_WEBHOOK_SECRET!);

  let event: any;
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      // Mark order as paid, trigger fulfillment
      console.log("Order paid:", event.data.object.id);
      // await updateOrderStatus(event.data.object.metadata.orderId, "pending");
      break;

    case "payment_intent.succeeded":
      console.log("Payment succeeded:", event.data.object.id);
      break;

    case "payment_intent.payment_failed":
      console.log("Payment failed:", event.data.object.id);
      break;

    default:
      console.log("Unhandled event:", event.type);
  }

  return NextResponse.json({ received: true });
}
