import { BuilderBlockAttributes } from "@/global.types";

export interface positionProps {
  left: number;
  top: number;
}

export interface listMapPinProps {
  text1: string;
  text2?: string;
  text3?: string;
  labelSide?: "left" | "right";
  position: positionProps;
}

export interface listMapCardProps {
  title: string;
  text: string;
  width?: number;
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