import { BuilderBlockAttributes, ThemeColors } from "@/global.types";

export interface CardsProps extends BuilderBlockAttributes {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  alignHeading?: 'left' | 'center' | 'right';
  cards?: CardsItemProps[];
  card_style?: string;
  remove_card_background?: boolean;
  buttonBottomAlign?: boolean;
  split_theme?: boolean;
  split_theme_color?: ThemeColors;
}

export interface CardsItemProps {
  image?: string;
  heading?: string;
  text?: string;
  cardLinkText?: string;
  cardLinkUrl?: string;
  card_style?: string;
  remove_card_background?: boolean;
  buttonBottomAlign?: boolean;
  count?: number;
}
