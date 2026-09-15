import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Testimonial Card",
  inputs: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "jobTitle",
      type: "string",
    },
    {
      name: "text",
      type: "richText",
    },
    {
      name: "logo",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
    },
    {
      name: "link",
      type: "reference",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
