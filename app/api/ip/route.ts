import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "0.0.0.0";

  return NextResponse.json({
    ip: ip.split(",")[0].trim(),
  });
}
