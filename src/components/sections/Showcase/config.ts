import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Showcase",

  inputs: [
    {
      name: "items",
      type: "list",
      max: 2,
      subFields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "text",
          type: "richText",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png"],
        },
      ],
    },
    {
      name: "theme",
      type: "string",
      enum: [
        { label: "Linen", value: "linen", helperText: "Default" },
        { label: "Claret", value: "claret" },
        { label: "Dune", value: "dune" },
        { label: "Mist", value: "mist" },
        { label: "Tundra", value: "tundra" },
        { label: "Blaze", value: "blaze" },
        { label: "Obsidian", value: "obsidian" },
        { label: "Mosswood", value: "mosswood" },
      ],
      defaultValue: "linen",
    },
    {
      name: "showLineSvg",
      type: "boolean",
      defaultValue: true,
      helperText: "Show the line SVG under the hero image",
    }
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
