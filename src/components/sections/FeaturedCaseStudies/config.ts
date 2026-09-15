import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Featured Case Studies",

  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Featured Case Study",
    },
    {
      name: "headingType",
      type: "string",
      enum: [
        { label: "H1", value: "h1" },
        { label: "H2", value: "h2" },
      ],
      defaultValue: "h2",
      helperText: "Heading type for the section title",
    },
    {
      name: "text",
      type: "richText",
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "buttonUrl",
      type: "string",
    },
    {
      name: "featuredCaseStudy",
      type: "object",
      subFields: [
        {
          name: "link",
          type: "reference",
          required: true,
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "eyebrow",
          type: "string",
        },
        {
          name: "logo",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        },
        {
          name: "subtext",
          type: "string",
        },
        {
          name: "linkText",
          type: "string",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
        },
      ],
    },
    {
      name: "testimonials",
      type: "list",
      max: 3,
      subFields: [
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
      ],
    },
    {
      name: "theme",
      type: "string",
      enum: [
        { label: "Linen", value: "linen", helperText: "Default" },
        { label: "Claret", value: "claret" },
        { label: "Dune", value: "dune" },
        { label: "Mist", value: "mist" },
        { label: "Tundra", value: "tundra" },
        { label: "Blaze", value: "blaze" },
        { label: "Obsidian", value: "obsidian" },
        { label: "Mosswood", value: "mosswood" },
      ],
      defaultValue: "linen",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
