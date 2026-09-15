import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Contact Us",
  friendlyName: "Contact Us",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "How can we help?",
      required: true,
    },
    {
      name: "text",
      type: "richText",
    },
    {
      name: "placeholder",
      friendlyName: "Select Placeholder",
      defaultValue: "I am",
      required: true,
    },
    {
      name: "options",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
          defaultValue: "I am interested in talking to an outsourcing expert",
          helperText: "Title is used as an option in the select dropdown",
        },
        {
          name: "link",
          friendlyName: "Link (Optional)",
          type: "string",
          helperText:
            "Provide a link for redirects, this option will not render a form",
        },
        {
          name: "heading",
          type: "string",
          helperText: "This is the form heading",
        },
        {
          name: "portalId",
          type: "string",
          helperText: "Enter the portal ID",
        },
        {
          name: "formId",
          type: "string",
          helperText: "Enter the form ID",
        },
        {
          name: "buttonText",
          type: "string",
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
