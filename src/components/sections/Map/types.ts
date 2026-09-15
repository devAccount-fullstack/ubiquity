import { BuilderBlockAttributes } from "@/global.types";

export interface listMapPinProps {
  text1: string;
  text2: string;
  text3: string;
  position: positionProps;
}

interface positionProps {
  left: number;
  top: number;
}

export interface MapProps extends BuilderBlockAttributes {
  heading: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
  image: string;
  disableFilter?: boolean;
  list_map_pin?: listMapPinProps[];
}
