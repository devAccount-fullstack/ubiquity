"use server";

import "server-only";
import { builder } from "@builder.io/sdk";
import { BuilderContent } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getAllResources = async (
  category: string | string[] | undefined = undefined,
  includeBlocks?: boolean,
) => {
  const model = "resource-detail";

  let query = undefined;

  if (category) {
    const categories = Array.isArray(category) ? category : [category];
    query = {
      data: {
        $or: [{ category: { $in: categories } }, { tags: { $in: categories } }],
      },
    };
  }

  try {
    const allResults: BuilderContent[] = [];
    let hasMore = true;

    let offset = 0;

    while (hasMore) {
      const relatedResources = await builder.getAll(model, {
        query: query,
        omit: includeBlocks ? undefined : "data.blocks",
        options: { noTargeting: true },
        limit: 100,
        offset: offset,
        sort: {
          createdDate: -1,
        },
      });

      allResults.push(...relatedResources);

      if (relatedResources.length === 100) {
        offset += 100;
      } else {
        hasMore = false;
      }
    }

    const sortedData = allResults.sort((a, b) => {
      const dateA = a.data?.publishedDate
        ? new Date(a.data.publishedDate)
        : new Date(0);
      const dateB = b.data?.publishedDate
        ? new Date(b.data.publishedDate)
        : new Date(0);

      if (!a.data?.publishedDate) {
        return 1;
      }
      if (!b.data?.publishedDate) {
        return -1;
      }

      return dateB.getTime() - dateA.getTime();
    });

    return sortedData;
  } catch (error) {
    console.error("Error fetching related resources:", error);
    return [];
  }
};
