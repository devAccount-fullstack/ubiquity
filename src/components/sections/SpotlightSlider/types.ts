import { BuilderBlockAttributes } from "@/global.types";

export interface SpotlightSliderProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  items?: {
    icon?: string;
    heading?: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
    image?: string;
  }[];
  showLineSvg?: boolean;
}
