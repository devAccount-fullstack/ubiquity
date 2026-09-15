import { BuilderBlockAttributes } from "@/global.types";

export interface Props extends BuilderBlockAttributes {
  backgroundImage?: string;
  heading: string;
  rows: {
    label: string;
    right: string;
  }[];
}
