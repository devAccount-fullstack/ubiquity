export const guideHeroConfig = {
  name: "Guide Hero",
  hideFromInsertMenu: true,
  inputs: [
    {
      name: "breadcrumbs",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "svg"],
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F044e43f86e3e46dfa0614966a8705f35%2F2e6b66541a014ee5900f3fd991fd319e",
    },
    {
      name: "disableImageFilter",
      type: "boolean",
      helperText: "Toggle to remove and add grayscale filter to the image",
      defaultValue: false,
    },
    {
      name: "theme",
      enum: ["orange", "yellow", "green", "black", "red", "peachy", "gray"],
      defaultValue: "orange",
    },
    {
      name: "badgeColor",
      enum: [
        "transparent",
        "white",
        "gray",
        "orange",
        "green",
        "peachy",
        "yellow",
        "red",
        "black",
      ],
      defaultValue: "yellow",
    },
    {
      name: "badgeText",
      type: "string",
      defaultValue: "Guide",
    },
    {
      name: "heading",
      type: "string",
      defaultValue: "Your customers need a CX hero.",
      helperText: "To highlight selected text use this format {%sample text%}",
    },
    {
      name: "content",
      type: "richText",
      defaultValue:
        "Lorem ipsum dolor sit amet consectetur. Augue mattis pulvinar lacus feugiat blandit dictumst netus. Euismod felis malesuada faucibus pellentesque hendrerit vel gravida. Molestie egestas.",
    },
    {
      name: "author",
      type: "string",
      defaultValue: "Article by Jane Doe",
    },
  ],
};
