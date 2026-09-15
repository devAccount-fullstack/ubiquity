import type { Component as ConfigOptions } from "@builder.io/sdk";

import Component from ".";

const config = {
  name: "Hero",
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
      name: "mediaPosition",
      type: "string",
      enum: ["under", "right", "behind", "full", "none"],
      required: true,
      defaultValue: "under",
      helperText: "Position of the media relative to the text",
    },
    {
      name: "media_type",
      type: "string",
      enum: ["image", "video"],
      defaultValue: "image",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
      showIf: (options: Map<string, string>) =>
        options?.get("media_type") === "image",
    },
    {
      name: "video",
      type: "file",
      allowedFileTypes: ["mp4"],
      showIf: (options: Map<string, string>) =>
        options?.get("media_type") === "video",
    },
    {
      name: "poster_image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
      showIf: (options: Map<string, string>) =>
        options?.get("media_type") === "video",
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
