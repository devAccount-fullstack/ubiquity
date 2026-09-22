import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Map",
  inputs: [
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "text",
      type: "richText",
      defaultValue:
        "Our 12 delivery sites on four continents combined with a robust global network of remote and hybrid agent talent provides the best of both worlds - structure and flexibility - for growth that guarantees privacy and security for the most regulated industries.",
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
      name: "list_map_pin",
      type: "list",
      subFields: [
        {
          name: "text1",
          type: "string",
        },
        {
          name: "text2",
          type: "string",
        },
        {
          name: "text3",
          type: "string",
        },
        {
          name: "position",
          type: "object",
          subFields: [
            {
              name: "left",
              type: "number",
              helperText:
                "This value is for the absolute position (in percent %), use values between 0 to 100 only",
              required: true,
            },
            {
              name: "top",
              type: "number",
              helperText:
                "This value is for the absolute position (in percent %), use values between 0 to 100 only",
              required: true,
            },
          ],
        },
      ],
      defaultValue: [
        {
          text: "Your default text here",
        },
      ],
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "svg"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F044e43f86e3e46dfa0614966a8705f35%2Fe12edd5615b44c3a835abcd892566061",
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