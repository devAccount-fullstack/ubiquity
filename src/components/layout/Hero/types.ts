import { BuilderBlockAttributes, ThemeColors } from "@/global.types";
import type { ReactNode } from "react";

export interface HeroProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  secondButtonText?: string;
  secondButtonUrl?: string;
  imageBelowContent?: string;
  mediaPosition: string;
  media_type?: "image" | "video" | null | undefined;
  image?: string;
  video?: string;
  poster_image?: string;
  small_hero_logo?: string;
  split_theme?: boolean;
  split_theme_color?: ThemeColors;
  showLineSvg?: boolean;
  author?: {
    name?: string;
    image?: string;
  };
  eyebrow?: string;
  backgroundImage?: string;
  mediaContent?: ReactNode;
}