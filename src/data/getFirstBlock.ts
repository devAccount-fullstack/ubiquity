"use server";

import "server-only";
import { builder } from "@builder.io/sdk/";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getFirstBlock = async (pagePath: string, modelName: string = "page") => {
  try {
    const res = await builder
      .get(modelName, {
        userAttributes: {
          urlPath: modelName === "page" ? "/" + pagePath : pagePath,
        },
        fields: "data.blocks",
        limit: 1,
      })
      .toPromise();

    if (res?.data?.blocks && res.data.blocks.length > 0) {
      return res.data.blocks[0];
    }
    return false;
  } catch (error) {
    console.error("Error fetching Builder data model:", error);
    return false;
  }
};
