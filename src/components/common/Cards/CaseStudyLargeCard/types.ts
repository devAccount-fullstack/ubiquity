import { Reference } from "@/global.types";

export interface CaseStudyLargeCardProps {
  caseStudy: {
    image?: string;
    title?: string;
    logo?: string;
    eyebrow?: string;
    subtext?: string;
    linkText?: string;
    link: Reference;
  };
  className?: string;
}
