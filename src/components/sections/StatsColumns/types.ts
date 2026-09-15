import { BuilderBlockAttributes } from "@/global.types";

export interface StatsColumnsProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  stats?: StatsProps[];
}

interface StatsProps {
  stat?: string;
  text?: string;
}
