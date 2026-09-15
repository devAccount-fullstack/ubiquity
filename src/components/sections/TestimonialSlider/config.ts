import Component from ".";

const config = {
  name: "Testimonials",
  inputs: [
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "testimonials",
      type: "list",
      subFields: [
        {
          name: "quote",
          type: "string",
        },
        {
          name: "text",
          type: "richText",
        },
        {
          name: "logo",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png", "svg"],
        },
        {
          name: "avatar",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png"],
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "linkUrl",
          type: "string",
        },
        {
          name: "linkText",
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
      name: "showLineSvg",
      type: "boolean",
      defaultValue: true,
      helperText: "Show the line SVG under the hero image",
    }
  ],
};

const block = {
  component: Component,
  config: config,
};

export default block;
