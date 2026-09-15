import { BuilderBlockAttributes } from "@/global.types";

export interface Props extends BuilderBlockAttributes {
  heading: string;
  body?: string;
  button?: {
    text?: string;
    url?: string;
  }
  gridLogo?: {
    image: string
    title?: string;
    content: HTMLElement | string;
  }[];
}
