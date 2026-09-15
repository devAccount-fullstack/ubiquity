import { BuilderBlockAttributes } from "@/global.types";

export interface TeamProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  teamMembers?: {
    name: string;
    role?: string;
    image?: string;
    linkedIn?: string;
  }[];
  columnCount?: number;
  showLineSvg?: boolean;
}
