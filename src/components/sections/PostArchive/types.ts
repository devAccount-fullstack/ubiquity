import { BuilderBlockAttributes, Reference } from "@/global.types";

export interface PostArchiveProps extends BuilderBlockAttributes {
  heading?: string;
  featuredPost?: {
    title?: string;
    eyebrow?: string;
    logo?: string;
    image?: string;
    link: Reference;
  };
}
