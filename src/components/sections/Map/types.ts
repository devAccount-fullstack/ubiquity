import { BuilderBlockAttributes } from "@/global.types";

export type PinType = "remote" | "in-center" | "both" | "hq";

/** Pin types that render as a dot (everything except the HQ star). */
export type DotType = Exclude<PinType, "hq">;

export interface positionProps {
  left: number; // % of map width
  top: number; // % of map height
}

export interface listMapPinProps {
  text1: string; // city label, e.g. "Sheffield, UK"
  text2?: string; // optional subtitle, e.g. "Ubiquity Global Headquarters"
  text3?: string; // no longer displayed (kept so existing Builder content doesn't break)
  pinType?: PinType;
  labelSide?: "left" | "right";
  position: positionProps;
}

export interface listMapCardProps {
  title: string;
  text: string;
  width?: number; // % of the map width
  position: positionProps;
}

export interface MapProps extends BuilderBlockAttributes {
  heading: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
  image: string;
  disableFilter?: boolean;
  list_map_pin?: listMapPinProps[];
  list_map_cards?: listMapCardProps[];
}