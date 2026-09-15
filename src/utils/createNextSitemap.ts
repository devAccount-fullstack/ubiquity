import { BuilderContent } from "@builder.io/sdk";
const siteURL = "https://www.ubiquity.com";

type ChangeFrequencyOptions =
  | "yearly"
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "never"
  | undefined;

export function createNextSitemap(
  content: BuilderContent,
  priority: number = 0.7,
  changeFrequency: ChangeFrequencyOptions = "monthly",
): {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFrequencyOptions;
  priority: number;
} {
  if (typeof content.data?.url !== "string" || !content.data?.url.trim()) {
    throw new Error("Redirect source must be a non-empty string.");
  }

  const fullUrl = new URL(content.data.url, siteURL).toString();

  if (fullUrl === siteURL) {
    return {
      url: fullUrl,
      lastModified: new Date(
        content.lastUpdated || content.firstPublished || Date.now(),
      ),
      changeFrequency: changeFrequency,
      priority: 1,
    };
  }
  return {
    url: fullUrl,
    lastModified: new Date(
      content.lastUpdated || content.firstPublished || Date.now(),
    ),
    changeFrequency: changeFrequency,
    priority: priority,
  };
}
