"use server";

import "server-only";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getRelatedResources = async (pagePath: string) => {
  const model = "resource-detail";

  try {
    const res = await builder
      .get(model, {
        userAttributes: {
          urlPath: pagePath,
        },
      })
      .toPromise();

    if (!res?.data) {
      return false;
    }

    const { category } = res.data;

    const seenIds = new Set([res.id]);

    const filterUnique = (items: { id?: string }[]) =>
      items.filter((item) => {
        if (!item.id || seenIds.has(item.id)) {
          return false;
        }

        seenIds.add(item.id);
        return true;
      });

    try {
      const relatedResources = filterUnique(
        await builder.getAll(model, {
          query: {
            id: { $ne: res.id },
            data: {
              category,
            },
          },
          omit: "data.blocks",
          options: { noTargeting: true },
          limit: 3,
        })
      );

      if (relatedResources.length === 3) {
        return relatedResources;
      }

      const fallbackResources = filterUnique(
        await builder.getAll(model, {
          query: {
            id: { $ne: res.id },
          },
          omit: "data.blocks",
          options: { noTargeting: true },
          limit: 3,
        })
      );

      return [...relatedResources, ...fallbackResources].slice(0, 3);
    } catch (error) {
      console.error("Error fetching related resources:", error);
      return false;
    }
  } catch (error) {
    console.error("Error fetching Builder data model:", error);
    return false;
  }
};
