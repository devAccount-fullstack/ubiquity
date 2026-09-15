import { iconIds } from "@components/common/Icon";

export const contactHeroConfig = {
  name: "Contact Hero",
  hideFromInsertMenu: true,
  inputs: [
    {
      name: "breadcrumbs",
      helperText: "Set to true to show breadcrumbs",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "useCustomBreadcrumbs",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "customBreadcrumbs",
      type: "list",
      subFields: [
        {
          name: "text",
          type: "string",
        },
        {
          name: "href",
          type: "string",
          helperText:
            "Link must start with slash and do not include trailing slash",
        },
      ],
      showIf: 'options.get("useCustomBreadcrumbs") === true',
    },
    {
      name: "theme",
      enum: ["orange", "yellow", "green", "black", "white"],
      defaultValue: "orange",
    },
    {
      name: "noBlockMarginTop",
      friendlyName: "Remove top margin",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "noBlockMarginBottom",
      friendlyName: "Remove bottom margin",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "heading",
      type: "string",
      defaultValue: "Your customers need a CX hero.",
      helperText: "To highlight selected text use this format {%sample text%}",
    },
    {
      name: "description",
      type: "richText",
      defaultValue:
        "Learn how to get a better return on your outsourcing investment and become a CX hero.",
    },
    {
      name: "icon",
      enum: iconIds,
      defaultValue: "checkmark-fill",
    },
    {
      name: "bullets",
      type: "list",
      subFields: [
        {
          name: "text",
          type: "richText",
        },
      ],
      defaultValue: [
        {
          text: "All features and premium support",
        },
        {
          text: "All features and premium support",
        },
        {
          text: "All features and premium support",
        },
      ],
    },
    {
      name: "quoteText",
      friendlyName: "Quote Text",
      type: "richText",
      helperText: "Optional quote block shown under the main content.",
    },
    {
      name: "image",
      type: "object",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["jpeg", "png"],
        },
        {
          name: "objectType",
          enum: ["contain", "cover", "fill", "none", "scale-down"],
          defaultValue: "contain",
        },
      ],
    },
    {
      name: "form",
      type: "object",
      subFields: [
        {
          name: "formHeading",
          type: "string",
        },
        {
          name: "formDescription",
          type: "string",
        },
        {
          name: "portalId",
          type: "string",
          required: true,
        },
        {
          name: "formId",
          type: "string",
          required: true,
        },
        {
          name: "downloadLink",
          type: "string",
          friendlyName: "Download Link",
          helperText: "(Optional) Add a downloadable link path.",
        },
        {
          name: "button",
          type: "string",
          defaultValue: "Send Message",
        },
        {
          name: "border",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
  ],
};
