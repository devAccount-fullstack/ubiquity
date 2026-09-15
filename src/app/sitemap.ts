import { fetchAllNoCache } from "@data/fetchAllNoCache";
import { createNextSitemap } from "@utils/createNextSitemap";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    ...(await fetchAllNoCache("page")).map((page) =>
      createNextSitemap(page, 0.8, "weekly"),
    ),
    ...(await fetchAllNoCache("resource-detail")).map((page) =>
      createNextSitemap(page, 0.7),
    ),
  ];
}
