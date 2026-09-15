import { Reference } from "@/global.types";

export interface BannerProps {
  close: boolean;
  themeColor: string;
  content: HTMLElement | string;
  link?: {
    text?: string;
    url?: string;
  };
  pages?: {
    page?: Reference;
  }[];
}
