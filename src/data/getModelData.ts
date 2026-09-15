// used on getting contents and generating metadata
import { builder } from "@builder.io/sdk/";

export const getModelData = async (slug: string, model: string, fields?: string) => {
  const res = await builder
    .get(model, {
      fields,
      userAttributes: {
        urlPath: slug,
      },
      prerender: false,
    })
    .toPromise();

  return res;
};