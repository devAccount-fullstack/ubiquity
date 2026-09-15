import { BuilderBlockAttributes } from "@/global.types";

export interface Props extends BuilderBlockAttributes {
  heading: string;
  body?: string;
  button?: {
    text?: string;
    url?: string;
  }
  leftColumnTitle: string;
  rightColumnTitle: string;
  rows: {
    label: string;
    left: string;
    right: string;
  }[];
  footerNote?: HTMLElement | string;
}
