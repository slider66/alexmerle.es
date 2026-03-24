import { MetadataRoute } from "next";
import { geoMunicipalities } from "@/lib/geoData";
import { nichesData } from "@/lib/nicheData";

export const dynamic = "force-static"; // deploy trigger

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://alexmerle.es",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://alexmerle.es/aviso-legal",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://alexmerle.es/privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://alexmerle.es/cookies",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const geoRoutes: MetadataRoute.Sitemap = geoMunicipalities.map((geo) => ({
    url: `https://alexmerle.es/${geo.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const nicheRoutes: MetadataRoute.Sitemap = nichesData.map((niche) => ({
    url: `https://alexmerle.es/para/${niche.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...geoRoutes, ...nicheRoutes];
}
