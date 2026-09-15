import { BlockProps, ThemeColors } from "@/global.types";

export interface PullquoteProps extends BlockProps {
  text?: string;
  backgroundColor: ThemeColors;
}
