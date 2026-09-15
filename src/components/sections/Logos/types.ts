import { BuilderBlockAttributes } from "@/global.types";

export interface LogosProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  logos?: imageProps[];
  divider?: boolean;
  dividerColor?: "linen" | "claret" | "dune" | "mist" | "tundra" | "blaze" | "obsidian" | "mosswood";
}

export interface imageProps {
  image?: string;
}
