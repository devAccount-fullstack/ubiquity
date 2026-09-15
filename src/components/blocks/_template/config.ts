import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Template",
  inputs: [
    {
      name: "text",
      type: "richText",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
