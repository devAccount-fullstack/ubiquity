import { BlockProps, Reference } from "@/global.types";

export interface TestimonialCardBlockProps extends BlockProps {
  text?: string;
  link?: Reference;
  name: string;
  jobTitle?: string;
  logo?: string;
  image?: string;
}
