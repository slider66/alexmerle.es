import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MotionProvider } from "@/components/MotionProvider";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// preload:false — Geist Mono solo se usa en la página /cookies (2 celdas de tabla).
// Sin esto Next.js precarga ambos woff2 en todas las páginas → warning en consola.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "WebPC · Especialistas en Rendimiento y Rescate Web para PYMES",
  description:
    "Consultoría de rendimiento web y digitalización avanzada. Rescatamos negocios de la obsolescencia técnica mediante arquitectura Web 4.0, automatización con IA y SEO Local de alto impacto. Sin agencias genéricas.",
  keywords: [
    "consultoría de rendimiento web",
    "rescate de proyectos digitales Madrid",
    "automatización con IA para pymes",
    "agencia web boutique técnica",
    "especialistas en Web 4.0",
    "optimización de procesos digitales",
    "desarrollo web alto rendimiento",
    "Web Performance Club",
  ],
  authors: [{ name: "WebPC", url: "https://webpc.es" }],
  creator: "WebPC",
  metadataBase: new URL("https://webpc.es"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "WebPC · Consultoría de Rendimiento y Rescate Digital",
    description:
      "Pasamos tu negocio de la invisibilidad a la Web 4.0. Rendimiento extremo y automatización operativa para PYMES.",
    url: "https://webpc.es",
    siteName: "Web Performance Club",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "WebPC — Especialistas en Rendimiento Web para PYMES en Madrid",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebPC · Rescate y Rendimiento Web",
    description:
      "Digitalización avanzada y arquitectura Web 4.0 para negocios que no pueden permitirse ser lentos.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://webpc.es/#organization",
      name: "Web Performance Club (WebPC)",
      image: "https://webpc.es/alex.webp",
      description:
        "Boutique tecnológica especializada en consultoría de rendimiento web, rescate de proyectos digitales obsoletos y automatización avanzada Web 4.0 para PYMES.",
      url: "https://webpc.es",
      email: "hola@webpc.es",
      telephone: "+34600367217",
      sameAs: ["https://es.linkedin.com/in/alejandromerle"],
      knowsAbout: [
        "Consultoría de rendimiento web",
        "Rescate de proyectos digitales",
        "Automatización con agentes de IA",
        "Arquitectura Web 4.0",
        "SEO Local de alto nivel",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://webpc.es/#service",
      name: "WebPC — Consultoría de Rendimiento y Rescate Web",
      description:
        "Especialistas en transformar webs lentas y obsoletas en activos de alto rendimiento. Arquitectura Web 4.0, IA y automatización.",
      url: "https://webpc.es",
      telephone: "+34600367217",
      email: "hola@webpc.es",
      provider: { "@id": "https://webpc.es/#organization" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "5",
        description:
          "Valoración de élite basada en resultados de negocio y optimización técnica profunda.",
      },
      areaServed: [
        "San Agustín de Guadalix",
        "San Sebastián de los Reyes",
        "El Molar",
        "Las Tablas",
        "Paracuellos de Jarama",
        "Alcobendas",
        "Algete",
        "Cobeña",
        "Daganzo de Arriba",
        "Tres Cantos",
        "Colmenar Viejo",
        "Soto del Real",
        "Guadalix de la Sierra",
        "Pedrezuela",
        "Norte de Madrid",
      ].map((name) => ({ "@type": "City", name })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de consultoría IT para pymes",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Fase 1 — La base de tu presencia online",
            description:
              "Página web profesional con carta o menú digital, SEO local, Google Maps, botón de contacto a WhatsApp y teléfono. Diseño responsive y carga rápida.",
            price: "449",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "449",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            name: "Fase 2 — Landing + Encargos + Confirmaciones",
            description:
              "Todo lo de la Fase 1 más sistema de encargos o reservas online paso a paso con selección de fecha y hora, y confirmación automática por email al cliente y al negocio.",
            price: "599",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Fase 3 — Integraciones y Pagos Online",
            description:
              "Todo lo de la Fase 2 más pasarela de pago integrada, sincronización con Google Sheets o Notion, conexión con CRM y automatizaciones personalizadas. Precio según integraciones.",
            price: "849",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Mantenimiento mensual",
            description:
              "Plan de mantenimiento mensual para proyectos desarrollados por Alejandro Merle. Incluye 2 sesiones de ajustes de 2h, actualización de dependencias, parcheado de CVEs y soporte prioritario. Intervenciones adicionales a 50€.",
            price: "80",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Intervención ad-hoc",
            description:
              "Intervención puntual sin suscripción. Cambio, corrección o actualización con presupuesto cerrado antes de empezar.",
            price: "50",
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
            text: "El plan de entrada sale por 449€ + IVA. Incluye diseño, SEO local, Google Maps y acceso directo a WhatsApp o llamada. Si además necesitas sistema de encargos con confirmaciones automáticas, hay un plan a 599€. Para integraciones complejas (pagos, CRM), desde 849€. Todo sin cuotas mensuales ni sorpresas.",
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
            text: "Operamos principalmente en el norte de Madrid: Alcobendas, San Sebastián de los Reyes, Las Tablas, San Agustín de Guadalix, El Molar, Paracuellos de Jarama y alrededores. Buena parte del trabajo también se puede hacer a distancia.",
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
            text: "Somos dos: Alejandro y Víctor. Ambos con formación en electrónica, sistemas y un máster en IA. Sin intermediarios ni comerciales — hablas directamente con quien hace el trabajo.",
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
        {
          "@type": "Question",
          name: "¿Qué pasa si todavía no tengo fotos ni contenido listo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es un bloqueante. Arrancamos con lo que tengas — fotos de móvil, imágenes de stock o lo que haya disponible — y publicamos cuanto antes. El objetivo es que tu web empiece a captar clientes hoy, no cuando todo esté perfecto. Las fotos profesionales y los textos definitivos se sustituyen cuando los tengas listos, sin coste adicional dentro del período de ajustes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito saber de informática para gestionar la web?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No hace falta. Todo está pensado para que funcione solo. Si algo cambia (precio, carta, horario), lo gestionamos juntos en las sesiones de ajuste incluidas en el plan.",
          },
        },
        {
          "@type": "Question",
          name: "¿Tienes trabajos que pueda ver antes de decidir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Hierros Merle (merle.es) y la demo de Café & Tortilla Montes (montes.vercel.app) son dos ejemplos reales. La propuesta completa que le hice a Montes también está publicada y te la puedes mirar antes de contactar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo se gestiona el pago?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se divide en dos partes: 50% al inicio del proyecto para reservar la plaza y arrancar el trabajo, y el 50% restante a la entrega de la web. Sin cuotas mensuales ni sorpresas.",
          },
        },
      ],
    },
  ],
};

// ──────────────────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white`}
      >
        {/* Grainy Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('/noise.svg')]" />

        <Navbar />
        <ScrollProgress />
        <MotionProvider>{children}</MotionProvider>
        <Footer />
        <BackToTop />
        {/* GA se carga condicionalmente desde CookieBanner solo si el usuario acepta */}
        <CookieBanner />
      </body>
    </html>
  );
}
