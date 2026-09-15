import { BuilderBlockAttributes } from "@/global.types";

export interface Props extends BuilderBlockAttributes {
  heading: string;
  body?: string;
  button?: {
    text?: string;
    url?: string;
  }
  portalId: string;
  formId: string;
  formButtonText?: string;
  sectionId?: string;
}
