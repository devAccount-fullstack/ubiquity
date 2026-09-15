import { BuilderBlockAttributes } from "@/global.types";

export interface TestimonialSliderProps extends BuilderBlockAttributes {
  heading?: string;
  testimonials?: TestimonialProps[];
  showLineSvg?: boolean;
}

export interface TestimonialProps {
  quote?: string;
  text?: string;
  logo?: string;
  avatar?: string;
  name?: string;
  title?: string;
  linkUrl?: string;
  linkText?: string;
}
