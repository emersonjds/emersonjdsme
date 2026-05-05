import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://emersonjds.dev";
  const lastModified = new Date();
  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${base}/`,
          "pt-BR": `${base}/`,
          es: `${base}/`,
        },
      },
    },
  ];
}
