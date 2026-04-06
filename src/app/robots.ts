import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Bots de scraping y IA conocidos — bloqueo total
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Omgilibot",
          "FacebookBot",
          "Bytespider",
          "PetalBot",
          "SemrushBot",
          "AhrefsBot",
          "DotBot",
          "MJ12bot",
          "DataForSeoBot",
          "BLEXBot",
          "serpstatbot",
          "SEOkicks",
          "linkdexbot",
          "ia_archiver",
          "HTTrack",
        ],
        disallow: "/",
      },
      // Crawlers legítimos
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://alexmerle.es/sitemap.xml",
  };
}
