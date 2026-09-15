"use server";

import "server-only";
import { builder } from "@builder.io/sdk/";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getBuilderDataModel = async (
  model: string,
  options?: {
    [key: string]: unknown;
  },
) => {
  try {
    const res = await builder
      .get(model, {
        fields: "data",
        options,
      })
      .toPromise();

    if (res?.data) {
      return res.data;
    }
    return false;
  } catch (error) {
    console.error(`Error fetching Builder data model "${model}":`, error);
    return false;
  }
};
