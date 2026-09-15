import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Grid Logo",
  inputs: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "body",
      type: "string",
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
      name: "gridLogo",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png"],
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "content",
          type: "richText",
        },
      ],
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
