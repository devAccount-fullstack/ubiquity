import { BuilderBlockAttributes } from "@/global.types";

export interface HowWeDoItProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  image?: string;
  features?: HowWeDoItCardProps[];
}

export interface HowWeDoItCardProps {
  heading?: string;
  text?: string;
}
