import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "SpotlightSlider",
  inputs: [
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "text",
      type: "richText",
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "buttonLink",
      type: "url",
    },
    {
      name: "items",
      type: "list",
      max: 2,
      subFields: [
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png", "svg"],
        },
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
        },
        {
          name: "buttonLink",
          type: "url",
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
