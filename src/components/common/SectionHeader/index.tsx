import { twMerge } from "tailwind-merge";
import Button from "../Button";
import RichText from "../RichText";
import { striptags } from "@utils/striptags";
import { SectionHeaderProps } from "./types";

function SectionHeader({
  heading,
  headingType,
  text,
  buttonText,
  buttonUrl,
  align,
  className,
  buttonHideMobile = false,
  wideTitle = false,
}: SectionHeaderProps) {
  if (!heading && !text && !buttonUrl) {
    return null;
  }

  const cleanHeading = striptags(heading);
  const cleanText = striptags(text);

  if (!cleanText && !buttonUrl && !align) {
    align = "center";
  }

  const headingClasses = {
    h1: "flex-1 font-serif text-6xl md:text-7xl lg:text-8xl pt-20 lg:pt-10 text-balance",
    h2: "flex-1 font-serif text-5xl md:text-6xl lg:text-7xl",
  };

  const headingTypeSafe: "h1" | "h2" = headingType === "h1" ? "h1" : "h2";
  const HeadingTag = headingTypeSafe;

  return (
    <div
      className={twMerge(
        "mb-10 flex flex-col flex-wrap justify-between gap-x-6 md:flex-row lg:mb-20",
        align === "center" && "md:flex-col",
        className,
      )}
    >
      {cleanHeading && (
        <HeadingTag
          className={twMerge(
            align === "center" && "text-center",
            headingClasses[headingTypeSafe],
            "text-balance",
          )}
        >
          <RichText content={heading} noWrapper />
        </HeadingTag>
      )}
      {cleanText || buttonUrl ? (
        <div
          className={twMerge(
            "md:mt-4 md:pl-4",
            wideTitle ? "basis-1/3" : "basis-5/12",
            text && "mt-4",
            !text && "md:text-right",
            align === "center" && "md:pl-0",
            align === "center" && buttonUrl && buttonText && "text-center",
          )}
        >
          {cleanText && (
            <RichText
              content={text}
              className={twMerge(
                align === "center" &&
                  "mx-auto mt-4 max-w-xl text-center md:mt-6 lg:mt-8",
              )}
            />
          )}
          {buttonUrl && buttonText && (
            <Button
              href={buttonUrl}
              variant="primary"
              asLink
              className={twMerge(
                align === "center" && "mx-auto",
                text && "mt-4 md:mt-6 lg:mt-8",
                buttonHideMobile && "hidden md:inline-flex",
              )}
            >
              {buttonText}
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
}
export default SectionHeader;
