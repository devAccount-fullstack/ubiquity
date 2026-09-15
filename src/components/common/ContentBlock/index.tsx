import { twMerge } from "tailwind-merge";
import Button from "../Button";
import RichText from "../RichText";
import { ContentBlockProps } from "./types";
import { striptags } from "@utils/striptags";

function ContentBlock({
  heading,
  text,
  buttonText,
  buttonUrl,
  align = "left",
  className,
}: ContentBlockProps) {
  return (
    <div className={twMerge(className)} data-name="content-block">
      {heading && striptags(heading) && (
        <h2
          className={twMerge(
            "font-serif text-5xl md:text-6xl lg:text-7xl",
            align === "center" && "text-center",
          )}
        >
          <RichText content={heading} noWrapper />
        </h2>
      )}
      {text && striptags(text) && (
        <RichText
          content={text}
          className={twMerge(
            "mt-4 md:mt-6 lg:mt-7",
            align === "center" && "mx-auto text-center",
          )}
        />
      )}
      {buttonUrl && buttonText && (
        <Button
          href={buttonUrl}
          variant="primary"
          asLink
          className="mt-4 md:mt-6 lg:mt-8"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default ContentBlock;
