import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projectPaths } from "@/lib/project-paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagePaths = ["/about/ru", "/contacts/ru", "/projects/ru"] as const;
  const withKz = (path: string) => path.replace(/\/ru$/, "/kz");

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/kz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pagePaths.flatMap((path) => [
      {
        url: `${siteConfig.url}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${siteConfig.url}${withKz(path)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ]),
    ...Object.values(projectPaths).flatMap((path) => [
      {
        url: `${siteConfig.url}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${siteConfig.url}${withKz(path)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
    ]),
    ...(["/policy/ru", "/policy/en", "/policy/kz"] as const).map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
