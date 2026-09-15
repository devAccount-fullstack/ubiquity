import { BuilderBlockAttributes, ThemeColors } from "@/global.types";

export interface SectionProps extends BuilderBlockAttributes {
  tag?: React.ElementType;
  width?: "default" | "wide" | "full";
  splitThemeOn?: boolean;
  splitThemeClass?: string;
  splitThemeMiddle?: boolean;
  splitThemeColor?: ThemeColors;
  containerClassName?: string;
  name: string;
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}
