export interface SectionHeaderProps {
  heading?: string;
  headingType?: string; // "h1" | "h2"
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  align?: "left" | "center" | "right";
  className?: string;
  wideTitle?: boolean;
  buttonHideMobile?: boolean;
}
