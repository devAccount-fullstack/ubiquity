import { BuilderBlockAttributes } from "@/global.types";

export interface AccordionTabsProps extends BuilderBlockAttributes {
  heading: string;
  tabs: {
    tabHeading: string;
    accordionItems: {
      heading: string;
      text: string;
    }[];
  }[];
  buttonText?: string;
  buttonUrl?: string;
}
