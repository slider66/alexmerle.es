import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    "Consultor informático independiente en el norte de Madrid. Webs profesionales, SEO local y sistemas de encargos online para negocios locales desde 390€. Sin agencias, sin letra pequeña.",
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
      "Webs profesionales, SEO local y sistemas de encargos online para negocios locales desde 390€. Norte de Madrid.",
    url: "https://alexmerle.es",
    siteName: "Alejandro Merle",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Merle · Consultor IT Norte de Madrid",
    description:
      "Webs profesionales y SEO local para negocios del norte de Madrid desde 390€.",
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
            price: "390",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "390",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            name: "Plan Avanzado — Web + encargos online",
            description:
              "Todo el Plan Básico más un sistema de encargos o reservas online paso a paso con selección de fecha y hora.",
            price: "490",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Plan Completo — Automatización total",
            description:
              "Todo el Plan Avanzado más emails automáticos al cliente y al negocio, descarga de evento al calendario y enlace WhatsApp con pedido redactado.",
            price: "570",
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
            text: "El plan de entrada sale por 390€ (precio de lanzamiento, antes 450€). Incluye diseño, SEO local, Google Maps y acceso directo a WhatsApp o llamada. Si además necesitas sistema de encargos o emails automáticos, hay planes desde 490€ y 570€. Todo sin cuotas mensuales ni sorpresas.",
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
            text: "Me muevo principalmente por el norte: San Agustín de Guadalix, El Molar, San Sebastián de los Reyes, Las Tablas, Paracuellos de Jarama y alrededores. Buena parte del trabajo también se puede hacer a distancia.",
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
      </body>
    </html>
  );
}
