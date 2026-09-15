import Component from ".";

const config = {
  name: "Logos",
  inputs: [
    {
      name: "heading",
      type: "richText",
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
      name: "logos",
      type: "list",
      max: 6,
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          required: true,
        },
      ],
    },
    {
      name: "divider",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "dividerColor",
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
      defaultValue: "dune",
      showIf: (options: Map<string, boolean>) =>
        options?.get("divider") === true,
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
};

const block = {
  component: Component,
  config: config,
};

export default block;
