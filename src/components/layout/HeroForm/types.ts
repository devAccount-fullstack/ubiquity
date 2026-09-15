import type { HeroProps } from "../Hero/types";

export interface HeroFormProps extends Omit<
  HeroProps,
  "mediaPosition" | "media_type" | "image" | "video" | "poster_image"
> {
  imageBelowContent?: string;
  formPosition?: "right" | "under";
  portalId: string;
  formId: string;
  submitText?: string;
}
