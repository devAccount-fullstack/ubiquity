import { BuilderBlockAttributes } from "@/global.types";

export interface Props extends BuilderBlockAttributes {
  heading: string;
  body?: string;
  button?: {
    text?: string;
    url?: string;
  }
  timeline?: {
    steps: string
    content: HTMLElement | string;
  }[];
  kpiSection?: {
    sectionTitle?: string;
    kpiTargets?: {
      title: string;
      arrowUp?: boolean;
      text: string;
    }[];
  },
  showSvgBottom?: boolean;
}
