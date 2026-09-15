import { BuilderBlockAttributes } from "@/global.types";

export interface QuoteProps extends BuilderBlockAttributes {
  quoteText?: string;
  removeTopPadding?: boolean;
  removeBottomPadding?: boolean;
}
