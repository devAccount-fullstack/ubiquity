"use server";

import "server-only";
import { builder } from "@builder.io/sdk/";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getCategories = async () => {
  const model = "resource-type";
  try {
    const res = await builder.getAll(model, {
      omit: "data.blocks",
      options: { noTargeting: true },
      limit: 100,
    });

    return res;
  } catch (error) {
    console.error(`Error fetching Builder data model "${model}":`, error);
  }
};
