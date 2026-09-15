import type { Component as ConfigOptions } from "@builder.io/sdk";

import Component from ".";

const themeOptions = [
  { label: "Linen", value: "linen", helperText: "Default" },
  { label: "Claret", value: "claret" },
  { label: "Dune", value: "dune" },
  { label: "Mist", value: "mist" },
  { label: "Tundra", value: "tundra" },
  { label: "Blaze", value: "blaze" },
  { label: "Obsidian", value: "obsidian" },
  { label: "Mosswood", value: "mosswood" },
];

const config = {
  name: "Hero - Form",
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
      name: "buttonUrl",
      type: "string",
    },
    {
      name: "secondButtonText",
      type: "string",
    },
    {
      name: "secondButtonUrl",
      type: "string",
    },
    {
      name: "imageBelowContent",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
      helperText: "Image shown below the left-side content",
    },
    {
      name: "formPosition",
      type: "string",
      enum: ["right", "under"],
      required: true,
      defaultValue: "right",
      helperText: "Position of the form relative to the text/image",
    },
    {
      name: "portalId",
      type: "string",
      required: true,
      defaultValue: "6711606",
    },
    {
      name: "formId",
      type: "string",
      required: true,
    },
    {
      name: "submitText",
      type: "string",
      defaultValue: "Submit",
    },
    {
      name: "small_hero_logo",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
    {
      name: "theme",
      type: "string",
      enum: themeOptions,
      defaultValue: "linen",
    },
    {
      name: "split_theme",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "split_theme_color",
      type: "string",
      enum: themeOptions,
      defaultValue: "claret",
      showIf: (options: Map<string, boolean>) =>
        options?.get("split_theme") === true,
    },
    {
      name: "showLineSvg",
      type: "boolean",
      defaultValue: true,
      helperText: "Show the line SVG near the hero form",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
