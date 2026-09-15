import { BuilderBlockAttributes } from "@/global.types";
import { BuilderElement } from "@builder.io/sdk";

export interface ResourceContentProps extends BuilderBlockAttributes {
  builderBlock?: BuilderElement;
  relatedResourcesLayout?: "side" | "bottom";
}
