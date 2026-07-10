import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const RECIPIENT = "tokpanov.k@tmk-limited.com";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
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

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = (await request.json()) as ContactPayload;

    if (body._website) {
      return NextResponse.json({ ok: true });
    }

    const { name, phone, email, message, locale } = body;

    if (!name?.trim() || !phone?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }

    const lang = locale === "en" ? "en" : "ru";

    const text = [
      "Новая заявка с сайта TMK Limited",
      "",
      `Язык: ${lang.toUpperCase()}`,
      `Имя: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Запрос: ${message.trim()}`,
      "",
      `IP: ${ip}`,
    ].join("\n");

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      if (process.env.NODE_ENV === "development") {
        console.log("[contact-form]", text);
      }
      return NextResponse.json({ ok: true, mode: "log" });
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
      replyTo: email.trim(),
      subject: `TMK Limited — заявка от ${name.trim()}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact-form]", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
