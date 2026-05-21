import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://opera.somossena.com/sitemap.xml
LLMs: https://opera.somossena.com/llms.txt
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
