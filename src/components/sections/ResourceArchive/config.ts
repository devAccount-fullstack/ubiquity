import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Resource Archive",
  inputs: [
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "filters",
      type: "object",
      subFields: [
        {
          name: "industry",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "solutions",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "resourceType",
          type: "boolean",
          defaultValue: true,
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
