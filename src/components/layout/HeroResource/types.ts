import { BuilderBlockAttributes } from "@/global.types";

export interface HeroResource extends BuilderBlockAttributes {
  badge?: string;
  heading?: string;
  text?: string;
  image?: string;
  author?: {
    name?: string;
    image?: string;
  };
}
