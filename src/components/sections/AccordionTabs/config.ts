import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "AccordionTabs",
  inputs: [
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "tabs",
      type: "list",
      subFields: [
        {
          name: "tabHeading",
          type: "string",
        },
        {
          name: "accordionItems",
          type: "list",
          subFields: [
            {
              name: "heading",
              type: "string",
            },
            {
              name: "text",
              type: "richText",
            },
          ],
        },
      ],
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "buttonUrl",
      type: "string",
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
