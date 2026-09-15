import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Team",
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
      name: "teamMembers",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
          required: true,
        },
        {
          name: "role",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
        {
          name: "linkedIn",
          type: "string",
          helperText: "LinkedIn profile URL",
        },
      ],
    },
    {
      name: "columnCount",
      type: "string",
      helperText: "Number of columns to display team members in",
      enum: [
        { label: "1 Column", value: 1 },
        { label: "2 Columns", value: 2 },
        { label: "3 Columns", value: 3 },
        { label: "4 Columns", value: 4 },
      ],
      defaultValue: 3,
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
