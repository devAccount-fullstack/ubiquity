import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Richtext",
  inputs: [
    {
      name: "headingId",
      type: "string",
      helperText: "Unique ID for this heading, please avoid spaces and use hyphens or underscores",
    },
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "headingSize",
      type: "enum",
      enum: [
        { 
          label: "Large", 
          value: "font-serif [&>:is(h1,h2,h3,h4,h5,h6)]:!m-0 [&>:is(h1,h2,h3,h4,h5,h6)]:!text-6xl [&>:is(h1,h2,h3,h4,h5,h6)]:!md:text-7xl [&>:is(h1,h2,h3,h4,h5,h6)]:!lg:text-8xl [&:is(button)]:!text-6xl [&:is(button)]:!md:text-7xl [&:is(button)]:!lg:text-8xl"
        },
        { 
          label: "Medium", 
          value: "font-serif [&>:is(h1,h2,h3,h4,h5,h6)]:!m-0 [&>:is(h1,h2,h3,h4,h5,h6)]:!text-5xl [&>:is(h1,h2,h3,h4,h5,h6)]:!md:text-6xl [&>:is(h1,h2,h3,h4,h5,h6)]:!lg:text-7xl [&:is(button)]:!text-5xl [&:is(button)]:!md:text-6xl [&:is(button)]:!lg:text-7xl"
        },
        { 
          label: "Small", 
          value: "font-serif [&>:is(h1,h2,h3,h4,h5,h6)]:!m-0 [&>:is(h1,h2,h3,h4,h5,h6)]:!text-3xl [&>:is(h1,h2,h3,h4,h5,h6)]:!md:text-5xl [&:is(button)]:!text-3xl [&:is(button)]:!md:text-5xl"
        },

        { label: "Unset", value: "font-serif" },
      ],
      helperText: "This will only change the size of the heading, not its tag",
      defaultValue: "Unset",
    },
    {
      name: "body",
      type: "richText",
    },
    {
      name: "citeThisSection",
      type: "string",
      helperText: "If provided, a 'Cite this section' icon will be shown beside the heading and this label will be for accessibility. Unique ID is required for this to work.",
    },
    {
      name: "copyButton",
      type: "object",
      subFields: [
        {
          name: "showCopyButton",
          type: "boolean",
          defaultValue: false,
          helperText: "If enabled, a button to copy the rich text content will be shown",
        },
        {
          name: "copyButtonLabel",
          type: "string",
          defaultValue: "Copy block",
          helperText: "Label for the copy button",
        }
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
