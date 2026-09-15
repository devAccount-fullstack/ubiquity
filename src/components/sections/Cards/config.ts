import Component from ".";

const config = {
  name: "Cards",

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
      name: "alignHeading",
      type: "string",
      enum: ["left", "center", "right"],
      default: "right",
    },
    {
      name: "card_style",
      type: "string",
      enum: ["image", "icon", "count"],
      default: "icon",
      description: "Choose the card style",
    },
    {
      name: "remove_card_background",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "buttonBottomAlign",
      type: "boolean",
      defaultValue: false,
      description: "Align button to the bottom of the card",
    },
    {
      name: "cards",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png", "svg"],
          description: "Image/Icon for the card",
          showIf: (options: Map<string, string>) =>
            options?.get("card_style") !== "count",
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
  ],
};

const block = {
  component: Component,
  config: config,
};

export default block;
