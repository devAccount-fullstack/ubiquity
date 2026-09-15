import { BuilderBlockAttributes } from "@/global.types";

export interface OfferingsProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  cards?: OfferingsCardProps[];
}

export interface OfferingsCardProps {
  icon?: string;
  heading?: string;
  text?: string;
  cardLinkText?: string;
  cardLinkUrl?: string;
}
