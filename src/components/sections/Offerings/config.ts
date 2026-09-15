import Component from ".";

const config = {
  name: "Offerings",

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
      name: "cards",
      type: "list",
      subFields: [
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png", "svg"],
        },
        {
          name: "heading",
          type: "string",
        },
        {
          name: "text",
          type: "richText",
        },
        {
          name: "cardLinkText",
          type: "string",
        },
        {
          name: "cardLinkUrl",
          type: "string",
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
};

const block = {
  component: Component,
  config: config,
};

export default block;
