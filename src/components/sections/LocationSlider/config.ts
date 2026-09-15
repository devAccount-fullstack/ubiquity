import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "LocationSlider",

  inputs: [
    {
      name: "locations",
      type: "list",
      max: 2,
      subFields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "subheading",
          type: "string",
          helperText: "Country",
        },
        {
          name: "text",
          type: "richText",
        },
        {
          name: "offices",
          type: "list",
          subFields: [
            {
              name: "name",
              type: "string",
            },
            {
              name: "address",
              type: "richText",
            },
          ],
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png"],
        },
      ],
    },
    {
      name: "componentId",
      type: "string",
      helperText: "Unique ID for this component",
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
