import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Horizontal Timeline",
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
      name: "timeline",
      type: "list",
      subFields: [
        {
          name: "steps",
          type: "string",
        },
        {
          name: "content",
          type: "richText",
        },
      ],
    },
    {
      name: "KPI Section",
      type: "object",
      subFields: [
        {
          name: "sectionTitle",
          type: "string",
        },
        {
          name: "kpiTargets",
          type: "list",
          max: 3,
          subFields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "arrowUp",
              type: "boolean",
            },
            {
              name: "text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "showSvgBottom",
      type: "boolean",
      defaultValue: true,
    }
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
