import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Comparison Table",
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
    { name: "leftColumnTitle", type: "string", defaultValue: "Enterprise AI Vendors" },
    { name: "rightColumnTitle", type: "string", defaultValue: "Ubiquity + Aigent" },
    {
      name: "rows",
      type: "list",
      subFields: [
        { name: "label", type: "string", friendlyName: "Row Label" },
        { name: "left", type: "string", friendlyName: "Left Column" },
        { name: "right", type: "string", friendlyName: "Right Column" },
      ],
      defaultValue: [
        {
          label: "Delivery",
          left: "Software you operate",
          right: "Managed service you consume",
        },
        {
          label: "Time to value",
          left: "Months",
          right: "Weeks",
        },
      ],
    },
    { name: "footerNote", type: "richText", friendlyName: "Footer Note" },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
