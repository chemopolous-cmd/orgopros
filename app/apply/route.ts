// /app/api/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // needed for Buffer

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * POST /api/apply
 * multipart/form-data body:
 *  - name: string
 *  - email: string
 *  - website: string (optional)
 *  - note: string
 *  - resume: File (PDF/DOC/DOCX)
 */
export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const website = form.get("website") ? String(form.get("website")) : "";
    const note = String(form.get("note") ?? "");
    const resume = form.get("resume") as File | null;

    if (!name || !email || !email.includes("@") || !resume) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (resume.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "File too large (max 10 MB)." },
        { status: 413 }
      );
    }

    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const subject = `Tutor Application — ${name}`;
    const text = `New tutor application

Name: ${name}
Email: ${email}
Website: ${website || "(none provided)"}

Note:
${note}
`;

    const { data, error } = await resend.emails.send({
      from: "OrgoPros <welcome@orgopros.com>",
      to: "welcome@orgopros.com",
      replyTo: email,
      subject,
      text,
      attachments: [
        {
          filename: resume.name || "resume",
          content: buffer,
          contentType: resume.type || "application/octet-stream",
        },
      ],
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
    console.error("Apply route error:", err);
    return NextResponse.json(
      { success: false, error: "Server error." },
      { status: 500 }
    );
  }
}
