import { BuilderContent } from "@builder.io/sdk";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export async function fetchAllNoCache(
  model: string,
  includeBlocks?: boolean,
): Promise<BuilderContent[]> {
  const url = `https://cdn.builder.io/api/v3/content/${model}`;
  const urlWithParams = new URL(url);
  let offset = 0;
  urlWithParams.searchParams.set("apiKey", apiKey);
  urlWithParams.searchParams.set("limit", "100");
  urlWithParams.searchParams.set("offset", offset.toString());
  if (!includeBlocks) {
    urlWithParams.searchParams.set("omit", "data.blocks");
  }

  const allResults: BuilderContent[] = [];
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(urlWithParams.toString(), {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${model}: ${response.status} ${response.statusText}`,
      );
    }
    const json = await response.json();
    const results: BuilderContent[] = json.results || [];
    allResults.push(...results);

    if (results.length === 100) {
      offset += 100;
      urlWithParams.searchParams.set("offset", offset.toString());
    } else {
      hasMore = false;
    }
  }

  return allResults;
}
