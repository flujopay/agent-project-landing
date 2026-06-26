import { getCountriesServer } from "@/lib/services/countryService.server";
import { getIpInfoServer } from "@/lib/services/ipConfigService.server";
import { ModalRenderer } from "@/ui/shared/ModalRender";
import { Toast } from "@/ui/shared/Toast";
import Whatsapp from "@/ui/shared/WhatsApp";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { adobeCleanFont, canaroFont, caslonFont } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Opera by Sena — La plataforma de cobranza B2B",
  description:
    "Opera by Sena: la plataforma de cobranza B2B que se adapta a tu operación. Implementación estratégica, agentes inteligentes y resultados reales.",
  keywords:
    "Opera, Sena, cobranza B2B, plataforma de cobranza, agentes de cobranza, automatización de cobranza, gestión de cartera",
  authors: [{ name: "Sena" }],
  robots: { index: true, follow: true },
  metadataBase: new URL("https://opera.somossena.com"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
    title: "Opera by Sena — La plataforma de cobranza B2B",
    description: "Opera by Sena: la plataforma de cobranza B2B que se adapta a tu operación.",
    images: ["https://opera.somossena.com/sena-crm-lite.jpg"],
  },
  openGraph: {
    title: "Opera by Sena — La plataforma de cobranza B2B",
    description:
      "Opera by Sena: la plataforma de cobranza B2B que se adapta a tu operación. Implementación estratégica, agentes inteligentes y resultados reales.",
    type: "website",
    url: "https://opera.somossena.com",
    images: ["https://opera.somossena.com/sena-crm-lite.jpg"],
    siteName: "Opera by Sena",
    locale: "es_CL",
  },
  other: {
    "facebook-domain-verification": "tyjmxihsgkrx666ql4rwmnhsftl6hv",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ipInfo, countries] = await Promise.all([
    getIpInfoServer(),
    getCountriesServer(),
  ]);
  const country = ipInfo?.country || null;

  return (
    <Providers country={country} countries={countries}>
      <html lang="es" dir="ltr">
        <head>
          {/* JSON-LD — Service + FAQPage */}
          <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Service",
                    name: "Opera by Sena",
                    description: "Servicio de cobranza B2B delegada. Opera by Sena gestiona tu cartera vencida con un equipo especializado: seguimiento, negociación y resultados reales.",
                    url: "https://opera.somossena.com",
                    serviceType: "Cobranza B2B Delegada",
                    provider: { "@type": "Organization", name: "Sena", url: "https://www.somossena.com" },
                    areaServed: ["CL", "PE"],
                    inLanguage: "es-CL",
                  },
                  {
                    "@type": "FAQPage",
                    mainEntity: [
                      {
                        "@type": "Question",
                        name: "¿Qué es Opera by Sena?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Opera by Sena es un servicio de cobranza B2B delegada. Nuestro equipo gestiona tu cartera vencida: seguimiento, llamadas, negociación y reportes. Tú solo ves los resultados.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "¿Cómo funciona el servicio de cobranza delegada?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Traspasal tu cartera de facturas vencidas a Opera y nuestro equipo asume la gestión completa: contacto con deudores, seguimiento de acuerdos de pago y reporting en tiempo real.",
                        },
                      },
                      {
                        "@type": "Question",
                        name: "¿Opera by Sena trabaja con empresas de todos los tamaños?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Sí. Opera está diseñado para empresas B2B chilenas que no tienen un equipo dedicado de cobranza o que quieren externalizar esa función para mejorar la recuperación de su cartera.",
                        },
                      },
                    ],
                  },
                ],
              }),
            }}
          />
          {/* Google Tag Manager — Opera (GTM-52ZMKFRM) */}
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-52ZMKFRM');`}
          </Script>
          {/* Google Ads */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17962976949"
            strategy="afterInteractive"
          />
          <Script id="google-ads-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17962976949');
            `}
          </Script>
          {/* Meta Pixel */}
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1585154825921176');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1585154825921176&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        </head>
        <body
          className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} antialiased font-adobe bg-surface-default`}
        >
          {/* Deshabilitar debugger statements */}
          <Script id="disable-debugger" strategy="beforeInteractive">
            {`
              (function() {
                  const originalDebugger = window.debugger;
                  window.debugger = function() {
                      // No hacer nada, deshabilitar pausas del debugger
                      return;
                  };
              })();
            `}
          </Script>
          {/* Fallback para Google Tag Manager */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-52ZMKFRM"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Suspense>{children}</Suspense>
          <ModalRenderer />
          <Toast />
          <Whatsapp
            message="Hola, vi su web y quiero saber más sobre Opera by Sena y cómo funciona."
            animated
          />
        </body>
      </html>
    </Providers>
  );
}
