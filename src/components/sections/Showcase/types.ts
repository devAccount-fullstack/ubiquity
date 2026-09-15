import { BuilderBlockAttributes } from "@/global.types";

export interface ShowcaseProps extends BuilderBlockAttributes {
  items: {
    heading: string;
    text: string;
    image: string;
  }[],
  showLineSvg?: boolean;
}
