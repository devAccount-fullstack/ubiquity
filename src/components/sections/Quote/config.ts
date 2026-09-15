import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Quote",
  inputs: [
    {
      name: "quoteText",
      friendlyName: "Quote Text",
      type: "richText",
      defaultValue:
        "Add a quote here.",
    },
    {
      name: "removeTopPadding",
      friendlyName: "Remove top padding",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "removeBottomPadding",
      friendlyName: "Remove bottom padding",
      type: "boolean",
      defaultValue: false,
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
  config,
};

export default block;
