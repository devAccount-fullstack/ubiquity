import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Stats",
  inputs: [
    {
      name: "statistic",
      type: "string",
    },
    {
      name: "label",
      type: "richText",
    },
    {
      name: "layout",
      type: "enum",
      enum: [
        { label: "Horizontal", value: "horizontal" },
        { label: "Vertical", value: "vertical" },
      ],
      defaultValue: "horizontal",
    },
    {
      name: "border",
      type: "boolean",
      defaultValue: true,
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
