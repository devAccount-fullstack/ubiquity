import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Content - Resource",
  inputs: [
    {
      name: "relatedResourcesLayout",
      type: "string",
      enum: [
        { label: "Side", value: "side" },
        { label: "Bottom", value: "bottom" },
      ],
      defaultValue: "side",
      helperText: "Choose where related resources appear on resource pages.",
    },
  ],
  canHaveChildren: true,
  defaultChildren: [],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
