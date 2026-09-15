import { BuilderBlockAttributes, Reference, ThemeColors } from "@/global.types";

export interface TestimonalsGridProps extends BuilderBlockAttributes {
  split_theme?: boolean;
  split_theme_color?: ThemeColors;
  heading?: string;
  headingType?: string; // "h1" | "h2"
  baseText?: string;
  baseButtonText?: string;
  baseButtonUrl?: string;
  featuredCaseStudy?: {
    title?: string;
    eyebrow?: string;
    logo?: string;
    image?: string;
    link: Reference;
  };
  testimonialsBottom?: {
    name?: string;
    jobTitle?: string;
    text?: string;
    logo?: string;
    link?: Reference;
  }[];
  testimonialsTop?: {
    name?: string;
    jobTitle?: string;
    text?: string;
    logo?: string;
    link?: Reference;
  }[];
  showLineSvg?: boolean;
}
