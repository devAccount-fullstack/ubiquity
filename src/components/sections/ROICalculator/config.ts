import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "ROICalculator",
  inputs: [
    {
      name: "heading",
      type: "richText",
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
      name: "text",
      type: "richText",
    },
    {
      name: "leanMoreHeading",
      type: "richText",
      helperText: "Heading for the 'Learn More' modal",
    },
    {
      name: "leanMoreContent",
      type: "richText",
      helperText: "Content for the 'Learn More' modal",
    },
    {
      name: "addForm",
      type: "boolean",
      helperText: "Enable to add a form below the calculator",
    },
    {
      name: 'formHeading',
      type: 'string',
      helperText: 'This is the form heading',
      showIf: (options: Map<string, boolean>) =>
        options?.get("addForm") === true,
    },
    {
      name: 'formSubheading',
      type: 'richText',
      helperText: 'This is the form subheading',
      showIf: (options: Map<string, boolean>) =>
        options?.get("addForm") === true,
    },
    {
      name: 'portalId',
      type: 'string',
      defaultValue: '6711606',
      helperText: 'Enter the portal ID',
      showIf: (options: Map<string, boolean>) =>
        options?.get("addForm") === true,
    },
    {
      name: 'formId',
      type: 'string',
      helperText: 'Enter the form ID',
      showIf: (options: Map<string, boolean>) =>
        options?.get("addForm") === true,
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
