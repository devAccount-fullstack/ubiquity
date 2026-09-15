import { BuilderBlockAttributes } from "@/global.types";

export interface Props extends BuilderBlockAttributes {
  headingId?: string;
  heading: string | HTMLElement;
  headingSize: string;
  body?: string | HTMLElement;
  citeThisSection?: string;
  copyButton: {
    showCopyButton: boolean;
    copyButtonLabel: string;
  };
}
