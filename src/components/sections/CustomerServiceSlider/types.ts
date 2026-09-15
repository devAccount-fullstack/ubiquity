import { BuilderBlockAttributes } from "@/global.types";

export interface CustomerServiceSliderProps extends BuilderBlockAttributes {
  slides?: {
    heading?: string;
    text?: string;
    buttonText?: string;
    buttonUrl?: string;
    image?: string;
    stats?: StatsItemProps[];
  }[];
}

export interface StatsItemProps {
  stat?: string;
  text?: string;
}
