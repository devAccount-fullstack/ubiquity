import { BuilderContent } from "@builder.io/sdk";
import { CSSProperties } from "react";

export type ThemeColors =
  | "blaze"
  | "obsidian"
  | "mosswood"
  | "dune"
  | "linen"
  | "mist"
  | "claret"
  | "tundra";

export interface BuilderBlockAttributes
  extends React.HTMLAttributes<HTMLElement> {
  theme: ThemeColors;
  attributes: {
    builderId: string;
    className: string;
    key: string;
    style: CSSProperties;
    [key: string]: unknown;
  };
}

export interface BlockProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  name: string;
  attributes: {
    builderId: string;
    className: string;
    key: string;
    style: CSSProperties;
    [key: string]: unknown;
  };
}

export interface TapTalentApiRes {
  id: string;
  title: string;
  description?: string;
  jobType?: string;
  publishType?: string;
  city?: string;
  state?: string;
  country: string;
  status?: string;
  createdAt: string;
  workMode?: string;
}

export interface Reference {
  model: string;
  value: BuilderContent;
  id?: string;
}
export interface PageMetaDataProps {
  data: DataProps;
}

interface DataProps {
  title?: string;
  description?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
  image?: string;
}