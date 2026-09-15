import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Media and Bullet List",
  inputs: [
    {
      name: "logo",
      type: "file",
      allowedFileTypes: ["jpg", "jpeg", "png", "svg"],
    },
    {
      name: "heading",
      type: "string",
    },
    {
      name: "body",
      type: "richText",
    },
    {
      name: "bulletList",
      type: "list",
      subFields: [
        {
          name: "content",
          type: "richText",
        },
      ],
    },
    {
      name: "button",
      type: "object",
      subFields: [
        {
          name: "text",
          type: "string",
        },
        {
          name: "url",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpg", "jpeg", "png"],
    },
    {
      name: "reverseColumns",
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
  config: config,
};

export default block;
