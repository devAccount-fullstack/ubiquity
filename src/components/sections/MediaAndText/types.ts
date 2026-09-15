import { BuilderBlockAttributes } from "@/global.types";

export interface MediaAndTextProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  media?: string;
}
