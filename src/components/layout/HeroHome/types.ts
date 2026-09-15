import { BuilderBlockAttributes } from "@/global.types";

export interface HeroHomeProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  image?: string;
  imageForeground?: string;
  imageMobile?: string;
  buttonText?: string;
  buttonUrl?: string;
}
