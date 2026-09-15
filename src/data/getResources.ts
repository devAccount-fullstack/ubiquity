"use server";

import "server-only";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getResources = async (
  category: string | string[] | undefined = undefined,
  limit = 6,
  offset = 0,
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
    const relatedResources = await builder.getAll(model, {
      query: query,
      omit: "data.blocks",
      options: { noTargeting: true },
      limit: limit,
      offset: offset,
    });

    return relatedResources;
  } catch (error) {
    console.error("Error fetching related resources:", error);
    return [];
  }
};
