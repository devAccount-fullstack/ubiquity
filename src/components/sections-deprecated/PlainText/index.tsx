import { BuilderBlockAttributes } from "@/global.types";
import RichText from "@components/common/RichText";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface PlainTextProps extends BuilderBlockAttributes {
  content: string;
  elementType?: "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "normal";
  bulletText: BulletedTextProps[];
  contentId?: string;
  bulletType?: "list-disc" | "list-decimal" | "list-none";
  fontSize: unknown;
}

interface BulletedTextProps {
  listText: string;
}

const PlainText: FC<PlainTextProps> = ({
  content,
  elementType,
  bulletText,
  contentId,
  bulletType,
  attributes: {
    "builder-id": builderId,
    className: attributesClassName,
    key: attributesKey,
    style: attributesStyle,
    ...attributesRest
  },
}) => {
  const cleanedElementType = elementType === "normal" ? "p" : elementType;

  const isHeading = cleanedElementType !== "p" && cleanedElementType !== "h6";

  // Removed due to conflicts with nested elements and styling
  // const Tag: React.ElementType = isHeading ? cleanedElementType || "h2" : "div";

  const cleanedClassName = attributesClassName
    ? attributesClassName.replace(/\s*css-[^\s]+/g, "")
    : "";

  const cleanedContent = content
    .replace(/<p[^>]*><br\s*\/?><\/p>/gm, "")
    .replace(/<p[^>]*>&nbsp;<\/p>/gm, "")
    .trim();

  return (
    <div
      builder-id={builderId}
      className={twMerge(cleanedClassName)}
      key={attributesKey}
      style={attributesStyle}
      element-type={elementType}
      {...attributesRest}
    >
      <div id={contentId && contentId}>
        <RichText
          content={cleanedContent}
          noWrapper={isHeading}
          prose={false}
        />
      </div>

      {bulletType === "list-disc" || bulletType === "list-none" ? (
        <div>
          <ul className={bulletType}>
            {bulletText?.length > 0 &&
              bulletText.map((list, i) => (
                <li key={`${list.listText}-${i.toString()}`} className="">
                  {list.listText}
                </li>
              ))}
          </ul>
        </div>
      ) : null}

      {bulletType === "list-decimal" ? (
        <div>
          <ol className={bulletType}>
            {bulletText?.length > 0 &&
              bulletText.map((list, i) => (
                <li key={`${list.listText}-${i.toString()}`} className="">
                  {list.listText}
                </li>
              ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
};
export default PlainText;
