import { BuilderBlockAttributes } from "@/global.types";
import HeroResource from "@components/layout/HeroResource";

interface GuideHeroProps extends BuilderBlockAttributes {
  breadcrumbs?: boolean;
  useCustomBreadcrumbs?: boolean;
  customBreadcrumbs?: { text: string; href?: string }[];
  image: string;
  disableImageFilter: boolean;
  heading: string;
  content: string;
  badgeColor:
    | "transparent"
    | "white"
    | "gray"
    | "orange"
    | "green"
    | "peachy"
    | "yellow"
    | "red"
    | "black";
  justify?: "start" | "center" | "end";
  badgeText: string;
  author: string;
}
const GuideHero = ({ attributes, author, heading }: GuideHeroProps) => {
  const cleanedClassName = attributes.className
    ? attributes.className.replace(/\s*css-[^\s]+/g, "")
    : "";

  const cleanAttributes = {
    ...attributes,
    className: cleanedClassName,
  };

  return (
    <HeroResource
      attributes={cleanAttributes}
      heading={heading}
      theme="mosswood"
      author={{
        name: author,
      }}
    />
  );
};
export default GuideHero;
