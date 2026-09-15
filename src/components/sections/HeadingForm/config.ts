import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Heading Form",
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
      name: 'portalId',
      type: 'string',
    },
    {
      name: 'formId',
      type: 'string',
    },
    {
      name: "formButtonText",
      type: "string",
    },
    {
      name: "sectionId",
      type: "string",
      helperText: "Unique ID for this section",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
