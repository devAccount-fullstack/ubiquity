import { iconIds } from "@components/common/Icon";

const updatedIconIds = ["", ...iconIds];

export const buttonConfig = {
  name: "Button",
  hideFromInsertMenu: true,
  inputs: [
    {
      name: "text",
      type: "string",
    },
    {
      name: "hierarchy",
      enum: [
        "black",
        "orange",
        "white",
        "yellow",
        "green",
        "linkBlack",
        "linkWhite",
      ],
    },
    {
      name: "background",
      enum: [
        "black",
        "orange",
        "white",
        "yellow",
        "green",
        "linkBlack",
        "linkWhite",
      ],
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "startIcon",
      enum: updatedIconIds,
    },
    {
      name: "endIcon",
      enum: updatedIconIds,
    },
    {
      name: "iconSize",
      type: "number",
    },
    {
      name: "showBackground",
      type: "boolean",
    },
    {
      name: "external",
      type: "boolean",
    },
  ],
};
