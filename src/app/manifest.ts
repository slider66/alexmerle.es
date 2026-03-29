import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alejandro Merle · Consultor IT",
    short_name: "Alex Merle",
    description:
      "Consultor IT en el Norte de Madrid. Webs profesionales, SEO local y automatización para pymes.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0070f3",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
