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
  openGraph: {
    title: "Opera by Sena — La plataforma de cobranza B2B",
    description:
      "Opera by Sena: la plataforma de cobranza B2B que se adapta a tu operación. Implementación estratégica, agentes inteligentes y resultados reales.",
    type: "website",
    url: "https://recupera.somossena.com",
    images: ["https://recupera.somossena.com/sena-crm-lite.jpg"],
    siteName: "Opera by Sena",
    locale: "es_PE",
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
          {/* Google Tag Manager Script (carga diferida) */}
          <Script id="gtm-script" strategy="lazyOnload">
            {`
                      (function(w,d,s,l,i){
                          w[l]=w[l]||[];
                          w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                          var f=d.getElementsByTagName(s)[0],
                          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                          j.async=true;
                          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                          f.parentNode.insertBefore(j,f);
                          })(window,document,'script','dataLayer','GTM-T2QDCJ6C');
                          `}
          </Script>
          {/* Google Analytics + Google Ads */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ZWQGDJHX8E"
            strategy="afterInteractive"
          />
          <Script id="google-analytics-ads-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZWQGDJHX8E');
              gtag('config', 'AW-17962976949');
            `}
          </Script>
        </head>
        <body
          className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} antialiased font-adobe`}
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
              src="https://www.googletagmanager.com/ns.html?id=GTM-T2QDCJ6C"
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
