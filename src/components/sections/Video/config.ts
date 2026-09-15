import type { Component as ConfigOptions } from "@builder.io/sdk";

import Component from ".";

const config = {
  name: "Video Component",
  inputs: [
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
      name: "buttonUrl",
      type: "string",
    },
    {
      name: "video",
      type: "file",
      allowedFileTypes: ["mp4"],
    },
    {
      name: "poster_image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
    {
      name: "autoPlay",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "controls",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "muted",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "loop",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "playsInline",
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
    {
      name: "split_theme",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "split_theme_color",
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
      defaultValue: "claret",
      showIf: (options: Map<string, boolean>) =>
        options?.get("split_theme") === true,
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
