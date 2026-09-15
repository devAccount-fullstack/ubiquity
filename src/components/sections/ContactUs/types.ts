import { BuilderBlockAttributes } from "@/global.types";

export interface ContactUsProps extends BuilderBlockAttributes {
  heading: string;
  text: string;
  placeholder: string;
  options: optionProps[];
}

export interface optionProps {
  title: string; // used for the select
  link?: string; // link to redirect if not form
  heading?: string;
  formId?: string;
  portalId?: string;
  buttonText?: string;
}
