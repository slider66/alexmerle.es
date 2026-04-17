import { MetadataRoute } from "next";
import { geoMunicipalities } from "@/lib/geoData";
import { nichesData } from "@/lib/nicheData";

export const dynamic = "force-static"; // deploy trigger

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://webpc.es",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://webpc.es/aviso-legal",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://webpc.es/privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://webpc.es/cookies",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const geoRoutes: MetadataRoute.Sitemap = geoMunicipalities.map((geo) => ({
    url: `https://webpc.es/${geo.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const nicheRoutes: MetadataRoute.Sitemap = nichesData.map((niche) => ({
    url: `https://webpc.es/para/${niche.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const geoNicheRoutes: MetadataRoute.Sitemap = [];
  geoMunicipalities.forEach((geo) => {
    nichesData.forEach((niche) => {
      geoNicheRoutes.push({
        url: `https://webpc.es/${geo.slug}/${niche.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return [...staticRoutes, ...geoRoutes, ...nicheRoutes, ...geoNicheRoutes];
}
