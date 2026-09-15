import { Reference } from "@/global.types";

export interface TestimonialCardProps {
  testimonial: {
    link?: Reference;
    name?: string;
    jobTitle?: string;
    text?: string;
    logo?: string;
  };
}
