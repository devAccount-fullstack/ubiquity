import { BuilderBlockAttributes, Reference } from "@/global.types";

export interface FeaturedCaseStudiesProps extends BuilderBlockAttributes {
  heading?: string;
  headingType?: "h1" | "h2";
  buttonText?: string;
  buttonUrl?: string;
  featuredCaseStudy?: {
    title?: string;
    eyebrow?: string;
    logo?: string;
    subtext?: string;
    image?: string;
    linkText?: string;
    link: Reference;
  };
  testimonials?: {
    name?: string;
    jobTitle?: string;
    text?: string;
    logo?: string;
    link?: Reference;
  }[];
}
