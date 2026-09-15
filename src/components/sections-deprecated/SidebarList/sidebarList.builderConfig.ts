export const sidebarListConfig = {
  name: "Sidebar List",
  hideFromInsertMenu: true,
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "In this article",
    },
    {
      name: "sidebarList",
      type: "list",
      subFields: [
        {
          name: "linkText",
          type: "string",
        },
        {
          name: "link",
          type: "string",
          helperText:
            "Link must start with slash and do not include trailing slash",
        },
      ],
    },
    {
      name: "socialLinks",
      type: "boolean",
      defaultValue: true,
      helperText: "Toggle to show/hide social share links/buttons",
    },
    {
      name: "shareTitle",
      type: "string",
      defaultValue: "Share",
    },
  ],
};
