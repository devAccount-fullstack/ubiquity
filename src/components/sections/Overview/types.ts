import { BuilderBlockAttributes } from "@/global.types";

export interface OverviewProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  columns?: OverviewColumnProps[];
  iconOpacity?: string;
}

export interface OverviewColumnProps {
  heading?: string;
  text?: string;
  max?: number;
  iconOpacity?: string;
}
