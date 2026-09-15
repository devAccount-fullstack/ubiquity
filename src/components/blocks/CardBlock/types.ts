import { BlockProps, ThemeColors } from "@/global.types";
import { BuilderElement } from "@builder.io/sdk";

export interface CardBlockProps extends BlockProps {
  backgroundColor: ThemeColors;
  builderBlock?: BuilderElement;
}
