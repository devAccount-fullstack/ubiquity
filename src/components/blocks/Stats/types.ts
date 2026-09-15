import { BlockProps } from "@/global.types";

export interface StatsProps extends BlockProps {
  statistic: string;
  label: string;
  layout: "horizontal" | "vertical";
  border: boolean;
}
