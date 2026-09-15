import { BuilderBlockAttributes } from "@/global.types";

export interface Props extends BuilderBlockAttributes {
  logo?: string;
  heading: string;
  body?: HTMLElement | string;
  bulletList?: { content: string }[];
  button?: {
    text?: string;
    url?: string;
  }
  image?: string;
  reverseColumns?: boolean;
}
