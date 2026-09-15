export interface GridProps {
  children: React.ReactNode;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  className?: string;
  tag?: React.ElementType;
  [key: string]: unknown;
}
