export const statisticsConfig = {
  name: "Statistics",
  hideFromInsertMenu: true,
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Transformational can be critical",
    },
    {
      name: "stats",
      type: "list",
      subFields: [
        {
          name: "percent",
          type: "string",
          defaultValue: "100%",
        },
        {
          name: "content",
          type: "string",
          defaultValue:
            "Customers are 2.4x more likely to stay with a brand based on one problem solving experience",
        },
      ],
    },
    {
      name: "theme",
      enum: ["black", "orange", "green"],
    },
  ],
};
