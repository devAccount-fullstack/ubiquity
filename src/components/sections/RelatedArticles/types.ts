import { BuilderBlockAttributes, Reference } from "@/global.types";

export interface RelatedArticlesProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  relatedArticles: {
    title: string;
    eyebrow?: string;
    image?: string;
    link: Reference;
  }[];
}
