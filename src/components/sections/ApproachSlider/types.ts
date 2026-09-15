import { BuilderBlockAttributes } from "@/global.types";

export interface ApproachSliderProps extends BuilderBlockAttributes {
  heading: string;
  tabs: {
    heading: string;
    eyebrow: string;
    text: string;
  }[];
}
