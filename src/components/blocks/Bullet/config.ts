import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Bullet",
  inputs: [
    {
      name: "bulletType",
      enum: ["circle", "check", "number"],
      defaultValue: "check",
    },
    {
      name: "text",
      type: "richText",
      defaultValue: "Lorem Ipsum is simply dummy text",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
