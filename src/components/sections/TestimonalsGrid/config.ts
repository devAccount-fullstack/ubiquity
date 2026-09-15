import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Testimonials Grid",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "What our clients have to say",
    },
    {
      name: "headingType",
      type: "string",
      enum: [
        { label: "H1", value: "h1" },
        { label: "H2", value: "h2" },
      ],
      defaultValue: "h1",
    },
    {
      name: "testimonialsTop",
      type: "list",
      max: 3,
      subFields: [
        {
          name: "link",
          type: "reference",
        },
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
      ],
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
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
        },
      ],
    },
    {
      name: "testimonialsBottom",
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
      name: "baseText",
      type: "richText",
    },
    {
      name: "baseButtonText",
      type: "string",
    },
    {
      name: "baseButtonLink",
      type: "string",
    },
    {
      name: "baseButtonUrl",
      type: "string",
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
    {
      name: "split_theme",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "split_theme_color",
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
      defaultValue: "claret",
      showIf: (options: Map<string, boolean>) =>
        options?.get("split_theme") === true,
    },
    {
      name: "showLineSvg",
      type: "boolean",
      defaultValue: true,
      helperText: "Show the line SVG under the hero image",
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
