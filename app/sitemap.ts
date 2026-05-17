import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.coveredconnect.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/how-much-life-insurance-do-i-need`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/term-life-insurance`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/term-vs-whole-life-insurance`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-life-insurance-for-40-year-olds`, // ✅ NOW CORRECT
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/life-insurance-for-people-over-40`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
  ];
}