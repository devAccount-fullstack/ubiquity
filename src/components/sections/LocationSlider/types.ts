import { BuilderBlockAttributes } from "@/global.types";

export interface LocationSliderProps extends BuilderBlockAttributes {
  componentId: string;
  locations?: {
    heading?: string;
    text?: string;
    subheading?: string;
    offices?: {
      name?: string;
      address?: string;
    }[];
    image?: string;
  }[],
}
