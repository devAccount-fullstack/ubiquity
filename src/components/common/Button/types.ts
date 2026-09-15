import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  asLink?: boolean;
  href?: string;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  disabled?: boolean;
  [key: string]: unknown;
}
