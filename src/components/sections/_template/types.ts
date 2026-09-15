import { BuilderBlockAttributes } from "@/global.types";

export interface TemplateProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
}
