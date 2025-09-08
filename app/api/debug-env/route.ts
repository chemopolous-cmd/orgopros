// app/api/debug-env/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? "set" : "missing",
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY ? "set" : "missing",
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || "not-set",
  });
}
