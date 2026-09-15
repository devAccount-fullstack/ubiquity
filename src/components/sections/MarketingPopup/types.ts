import { BuilderBlockAttributes } from "@/global.types";

export interface PopupProps extends BuilderBlockAttributes {
  delay: number;
  image?: string;
  eyebrow?: string;
  headline: string;
  subheading?: HTMLElement | string;
  button?: {
    text?: string;
    url?: string;
  }
}
