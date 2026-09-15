import { BuilderBlockAttributes } from "@/global.types";

export interface ResourceArchiveProps extends BuilderBlockAttributes {
  heading?: string;
  filters?: {
    industry?: boolean;
    solutions?: boolean;
    resourceType?: boolean;
  };
}
