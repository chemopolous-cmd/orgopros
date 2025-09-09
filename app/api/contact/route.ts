import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * POST /api/contact
 * Body: { name: string, email: string, interest: string, message: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email, interest, message } = await req.json();

    // Minimal validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof interest !== "string" ||
      typeof message !== "string" ||
      !email.includes("@")
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    // Send the email via Resend
    const { data, error } = await resend.emails.send({
      from: "OrgoPros <welcome@orgopros.com>", // must be a verified sender/domain in Resend
      to: "welcome@orgopros.com",
      replyTo: email, // camelCase for Node SDK
      subject: `Inquiry: ${interest} — ${name}`,
      text: `Name: ${name}
Email: ${email}
Interest: ${interest}

Message:
${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Email send failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id ?? null });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { success: false, error: "Server error." },
      { status: 500 }
    );
  }
}
