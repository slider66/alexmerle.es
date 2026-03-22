import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro Merle · Consultor IT Norte de Madrid | Webs para negocios locales",
  description:
    "Consultor informático independiente en el norte de Madrid. Webs profesionales, SEO local y sistemas de encargos online para negocios locales desde 690€. Sin agencias, sin letra pequeña.",
  keywords: [
    "consultor informático norte de Madrid",
    "consultor IT San Sebastián de los Reyes",
    "página web para negocios locales Madrid",
    "diseño web pymes Madrid norte",
    "SEO local Madrid norte",
    "consultor informático San Agustín de Guadalix",
    "página web para cafetería Madrid",
    "página web para inmobiliaria Madrid",
    "automatización con IA para pymes",
    "Alejandro Merle consultor IT",
  ],
  authors: [{ name: "Alejandro Merle", url: "https://alexmerle.es" }],
  creator: "Alejandro Merle",
  metadataBase: new URL("https://alexmerle.es"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alejandro Merle · Consultor IT Norte de Madrid",
    description:
      "Webs profesionales, SEO local y sistemas de encargos online para negocios locales desde 690€. Norte de Madrid.",
    url: "https://alexmerle.es",
    siteName: "Alejandro Merle",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/alex.png", width: 800, height: 1000, alt: "Alejandro Merle — Consultor IT Norte de Madrid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Merle · Consultor IT Norte de Madrid",
    description:
      "Webs profesionales y SEO local para negocios del norte de Madrid desde 690€.",
    images: ["/alex.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://alexmerle.es/#person",
      name: "Alejandro Merle",
      image: "https://alexmerle.es/alex.png",
      jobTitle: "Consultor Informático",
      description:
        "Consultor IT independiente especializado en presencia digital, SEO local y automatización con IA para pequeñas empresas del norte de Madrid. Analista de ciberseguridad en Telefónica. Formación en electrónica, telecomunicaciones e informática. Certificado CompTIA.",
      url: "https://alexmerle.es",
      email: "alex@merle.es",
      telephone: "+34600367217",
      sameAs: ["https://es.linkedin.com/in/alejandromerle"],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 40.65,
          longitude: -3.6,
        },
        geoRadius: "40000",
      },
      knowsAbout: [
        "Diseño web para pymes",
        "SEO local Madrid",
        "Automatización con inteligencia artificial",
        "Ciberseguridad",
        "Consultoría informática",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://alexmerle.es/#service",
      name: "Alejandro Merle — Consultor IT Norte de Madrid",
      description:
        "Servicio de consultoría informática para negocios locales del norte de Madrid. Webs profesionales, SEO local, sistemas de encargos online y automatización con IA.",
      url: "https://alexmerle.es",
      telephone: "+34600367217",
      email: "alex@merle.es",
      provider: { "@id": "https://alexmerle.es/#person" },
      areaServed: [
        "San Agustín de Guadalix",
        "San Sebastián de los Reyes",
        "El Molar",
        "Las Tablas",
        "Paracuellos de Jarama",
        "Alcobendas",
        "Norte de Madrid",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de consultoría IT para pymes",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Plan Básico — Web con SEO local",
            description:
              "Página web profesional con carta o servicios, SEO local, Google Maps, CTA a WhatsApp y llamada. Diseño responsive y velocidad optimizada.",
            price: "690",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "690",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            name: "Plan Avanzado — Web + encargos online",
            description:
              "Todo el Plan Básico más un sistema de encargos o reservas online paso a paso con selección de fecha y hora.",
            price: "990",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Plan Completo — Automatización total",
            description:
              "Todo el Plan Avanzado más emails automáticos al cliente y al negocio, descarga de evento al calendario y enlace WhatsApp con pedido redactado.",
            price: "1290",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Mantenimiento mensual",
            description:
              "Plan de mantenimiento mensual para proyectos desarrollados por Alejandro Merle. Incluye 2 cambios de contenido, actualización de dependencias, parcheado de CVEs y soporte prioritario. Intervenciones adicionales a 39€.",
            price: "49",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Intervención ad-hoc",
            description:
              "Intervención puntual sin suscripción. Cambio, corrección o actualización con presupuesto cerrado antes de empezar.",
            price: "120",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Auditoría de proyecto de terceros",
            description:
              "Análisis del código y arquitectura de un proyecto existente. Incluye detección de problemas, propuesta de mejoras y presupuesto detallado antes de tocar nada.",
            price: "150",
            priceCurrency: "EUR",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta una página web para mi negocio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El plan de entrada sale por 690€ + IVA (precio de lanzamiento). Incluye diseño, SEO local, Google Maps y acceso directo a WhatsApp o llamada. Si además necesitas sistema de encargos o emails automáticos, hay planes desde 990€ y 1.290€. Todo sin cuotas mensuales ni sorpresas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo tardas en tener la web lista?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un proyecto básico normalmente está publicado en 1-2 semanas desde que arrancamos, dependiendo de la rapidez con la que puedas entregar el contenido (fotos, carta, descripción del negocio).",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué zona de Madrid cubres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Me muevo principalmente por el norte: San Agustín de Guadalix, Alcobendas, El Molar, San Sebastián de los Reyes, Las Tablas, Paracuellos de Jarama y alrededores. Buena parte del trabajo también se puede hacer a distancia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es el SEO local y para qué le sirve a mi negocio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es lo que hace que aparezcas en Google cuando alguien de tu zona busca lo que tú ofreces. Si tienes un bar en San Sebastián de los Reyes y alguien busca 'café cerca', sin SEO local no apareces. Con él, sí.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajas solo o hay una empresa detrás?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solo. Soy autónomo, lo que significa que hablas directamente con quien hace el trabajo. Sin intermediarios, sin comerciales que te pasen a otra persona.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo pedir cambios una vez entregada la web?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Todos los planes incluyen dos sesiones de ajustes gratuitas tras la entrega. El código también es tuyo: te lo entrego en un repositorio Git para que no dependas de mí.",
          },
        },
      ],
    },
  ],
};

// ──────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white`}
      >
        {/* Grainy Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <Navbar />
        {children}
        <Footer />
        <BackToTop />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-794H8PS8X1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-794H8PS8X1');
          `}
        </Script>
      </body>
    </html>
  );
}
