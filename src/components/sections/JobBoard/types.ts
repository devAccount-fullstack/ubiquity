import { BuilderBlockAttributes, ThemeColors } from "@/global.types";

export interface JobBoardProps extends BuilderBlockAttributes {
  heading?: string;
  split_theme?: boolean;
  split_theme_color?: ThemeColors;
}
