import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Customer Service Slider",
  inputs: [
    {
      name: "slides",
      type: "list",
      max: 8,
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
          name: "buttonText",
          type: "string",
          helperText: "Optional button text",
        },
        {
          name: "buttonUrl",
          type: "url",
          helperText: "Optional button URL",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png"],
        },
        {
          name: "stats",
          type: "list",
          min: 1,
          max: 3,
          subFields: [
            {
              name: "stat",
              type: "string",
            },
            {
              name: "text",
              type: "richText",
              helperText: "Put source in parentheses e.g. (XYZ)",
            },
          ],
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
