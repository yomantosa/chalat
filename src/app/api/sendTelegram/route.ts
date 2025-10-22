import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, details } = await req.json();

  const token = process.env.TELEGRAM_BOT_TOKEN!;
  const chatId = process.env.TELEGRAM_CHAT_ID!;

  const message = `📦 *New Order Received*\n\n👤 Name: ${name}\n📱 WhatsApp: ${phone}\n🧋 Order: ${details}`;

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const res = await fetch(telegramUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: await res.text() });
  }

  return NextResponse.json({ ok: true });
}
