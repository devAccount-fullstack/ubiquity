import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "MarketingPopup",
  inputs: [
    {
      name: "delay",
      type: "number",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpg", "jpeg", "png"],
    },
    {
      name: "eyebrow",
      type: "string",
    },
    {
      name: "headline",
      type: "string",
    },
    {
      name: "subheading",
      type: "richText",
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
      name: "theme",
      type: "string",
      enum: [
        { label: "Claret", value: "claret" },
        { label: "Blaze", value: "blaze" },
        { label: "Dune", value: "dune", helperText: "Default" },
        { label: "Mist", value: "mist" },
      ],
      defaultValue: "dune",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
