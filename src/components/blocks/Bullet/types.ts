import { BuilderBlockAttributes } from "@/global.types";

export interface BulletProps extends BuilderBlockAttributes {
  text?: string;
  bulletType: "circle" | "check" | "number";
}
