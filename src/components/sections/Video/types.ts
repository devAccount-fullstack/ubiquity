import { BuilderBlockAttributes, ThemeColors } from "@/global.types";

export interface VideoProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  video?: string;
  poster_image?: string;
  split_theme?: boolean;
  split_theme_color?: ThemeColors;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}
