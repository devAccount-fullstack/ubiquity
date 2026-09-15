export const conversionPanelConfig = {
  name: "Conversion Panel",
  hideFromInsertMenu: true,
  inputs: [
    {
      name: "theme",
      type: "string",
      enum: ["yellow", "orange", "white", "black"],
      required: true,
      defaultValue: "yellow",
    },
    { name: "noPaddingTop", type: "boolean", defaultValue: false },
    { name: "noPaddingBottom", type: "boolean", defaultValue: false },
    {
      name: "type",
      type: "string",
      enum: ["CTA Conversion Panel", "Form Conversion Panel"],
      defaultValue: "CTA Conversion Panel",
    },
    {
      name: "headingAs",
      type: "text",
      defaultValue: "h2",
      enum: ["h2", "h3", "h4", "h5", "h6"],
    },
    {
      name: "alignment",
      type: "text",
      defaultValue: "center",
      enum: ["center", "left", "right"],
    },
    {
      name: "heading",
      type: "string",
      defaultValue: "Your Brand. Our Expertise. Infinite Possibilities.",
      helperText: "To highlight selected text use this format {%sample text%}",
    },
    {
      name: "description",
      type: "richText",
      defaultValue:
        "Ubiquity empowers you to redefine customer engagement. Are you up for the challenge?",
      showIf: "options.get('type') === 'CTA Conversion Panel'",
    },
    {
      name: "inputLabel",
      type: "string",
      defaultValue: "Business Email",
      showIf: "options.get('type') === 'Form Conversion Panel'",
    },
    {
      name: "inputPlaceholder",
      type: "string",
      defaultValue: "Enter your email",
      showIf: "options.get('type') === 'Form Conversion Panel'",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Let's Talk",
    },
    {
      name: "buttonUrl",
      type: "string",
      defaultValue: "/contact",
      helperText:
        "For internal links, link must start with slash and do not include trailing slash",
    },
    {
      name: "isModalForm",
      friendlyName: "",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "modalHeading",
      type: "string",
      defaultValue: "Talk to an outsourcing expert today",
      showIf: 'options.get("isModalForm") === true',
    },
    {
      name: "modalDescription",
      type: "string",
      defaultValue:
        "Learn how to get a better return on your outsourcing investment and become a CX hero.",
      showIf: 'options.get("isModalForm") === true',
    },
    {
      name: "portalId",
      friendlyName: "HubSpot Portal ID",
      type: "string",
      defaultValue: "6711606",
      showIf: 'options.get("isModalForm") === true',
    },
    {
      name: "formId",
      friendlyName: "HubSpot Form ID",
      type: "string",
      defaultValue: "91f51810-9a5f-4f60-a0cb-e047291e51c5",
      showIf: 'options.get("isModalForm") === true',
    },
  ],
};
