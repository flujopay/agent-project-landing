import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Opera by Sena — Plataforma de cobranza B2B

> Plataforma de cobranza B2B que combina tecnología, estrategia y agentes inteligentes.
> Implementación rápida, resultados medibles desde el primer mes.

## Qué hace Opera

Opera gestiona el ciclo completo de cobranza B2B mediante:
- Agentes inteligentes que automatizan contactos y seguimientos
- Estrategia de cobranza adaptada a cada tipo de cartera
- Dashboard en tiempo real con métricas de recupero
- Integración con sistemas de facturación existentes

## Propuesta de valor

- Sin setup complejo — implementación en días, no meses
- Sin compromisos — el cliente define el ritmo y la estrategia
- Resultados reales — métricas de recupero transparentes desde el primer mes

## A quién va dirigido

Empresas B2B con:
- Carteras de cobranza medianas y grandes
- Necesidad de escalar operaciones sin aumentar equipo
- Operación en Chile y LATAM

## Páginas principales

- [Inicio](https://opera.somossena.com): propuesta de valor y cómo funciona
- [Contacto](https://opera.somossena.com#contacto): hablar con un especialista

## Contacto

Web: https://opera.somossena.com
Empresa: Sena — somossena.com
`.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
