import Component from ".";

const config = {
  name: "Overview",

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
      name: "columns",
      type: "list",
      max: 3,
      subFields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "text",
          type: "richText",
        },
      ],
    },
    {
      name: "iconOpacity",
      type: "string",
      enum: [
        { label: "100%", value: "100%" },
        { label: "50%", value: "50%" },
      ],
      defaultValue: "100%",
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
