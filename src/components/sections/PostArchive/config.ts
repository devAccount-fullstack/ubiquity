import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "PostArchive",
  inputs: [
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "featuredPost",
      type: "object",
      subFields: [
        {
          name: "link",
          type: "reference",
          required: true,
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "eyebrow",
          type: "string",
        },
        {
          name: "logo",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
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
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
