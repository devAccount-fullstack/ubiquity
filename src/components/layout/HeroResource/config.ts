import type { Component as ConfigOptions } from "@builder.io/sdk";

import Component from ".";

const config = {
  name: "Hero - Resource",
  inputs: [
    {
      name: "badge",
      type: "string",
      helperText: "Category will display if empty",
    },
    {
      name: "heading",
      type: "richText",
      helperText: "Page title will display if empty",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
      helperText: "Featured image will display if empty",
    },
    {
      name: "author",
      type: "object",
      subFields: [
        {
          name: "name",
          type: "string",
          helperText: "Author's name",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
          helperText: "Author's image",
        },
      ],
    },
    {
      name: "theme",
      type: "string",
      enum: [
        { label: "Linen", value: "linen" },
        { label: "Claret", value: "claret" },
        { label: "Dune", value: "dune" },
        { label: "Mist", value: "mist" },
        { label: "Tundra", value: "tundra" },
        { label: "Blaze", value: "blaze" },
        { label: "Obsidian", value: "obsidian" },
        { label: "Mosswood", value: "mosswood", helperText: "Default" },
      ],
      defaultValue: "mosswood",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
