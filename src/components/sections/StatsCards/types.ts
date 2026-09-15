import { BuilderBlockAttributes } from "@/global.types";

export interface StatsCardsProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  stats?: StatsProps[];
}

export interface StatsProps {
  stat?: string;
  text?: string;
}
