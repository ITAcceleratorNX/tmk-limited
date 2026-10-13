import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

/** Only server-side — never exposed to the client. */
const RECIPIENT =
  process.env.CONTACT_TO?.trim() || "tokpanov.k@tmk-limited.com";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  company?: string;
  locale?: string;
  privacy?: string;
  _website?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 11;
}

/** Same opaque responses for all clients — delivery details stay server-only. */
function ok() {
  return NextResponse.json({ ok: true });
}

function fail(status: number) {
  return NextResponse.json({ error: "Request failed" }, { status });
}

function formatLead(body: Required<Pick<ContactPayload, "name" | "phone" | "email" | "message">> & {
  company?: string;
  locale: string;
  ip: string;
}) {
  return [
    "Новая заявка с сайта TMK Limited",
    "",
    `Язык: ${body.locale.toUpperCase()}`,
    `Имя: ${body.name}`,
    body.company ? `Компания: ${body.company}` : null,
    `Телефон: ${body.phone}`,
    `Email: ${body.email}`,
    `Запрос: ${body.message}`,
    "",
    `IP: ${body.ip}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimit(ip)) {
      return fail(429);
    }

    const body = (await request.json()) as ContactPayload;

    // Honeypot: pretend success so bots learn nothing
    if (body._website) {
      return ok();
    }

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const company = body.company?.trim() || undefined;

    if (!name || !phone || !email || !message) {
      return fail(400);
    }

    if (!isValidEmail(email) || !isValidPhone(phone)) {
      return fail(400);
    }

    const locale = body.locale === "en" || body.locale === "kk" ? body.locale : "ru";
    const text = formatLead({ name, phone, email, message, company, locale, ip });

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      // Dev only: we see the lead in the server console; client still gets { ok: true }
      if (process.env.NODE_ENV === "development") {
        console.log("[contact-form]", text);
        return ok();
      }
      console.error("[contact-form] SMTP is not configured");
      return fail(500);
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: RECIPIENT,
      // No BCC / no copy to the visitor — only the recipient above is notified
      replyTo: email,
      subject: `TMK Limited — заявка от ${name}`,
      text,
    });

    return ok();
  } catch (error) {
    console.error("[contact-form]", error);
    return fail(500);
  }
}
