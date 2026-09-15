"use client";

import IconPlus from "@assets/img/icon-plus.svg";
import { twMerge } from "tailwind-merge";
import RichText from "@components/common/RichText";

function Details({
  heading,
  text,
  className,
  expanded = false,
  onToggle = () => {},
}: {
  heading: string;
  text: string;
  className?: string;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  const contentId = `details-content-${heading.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={twMerge("rounded-md bg-white", className)}>
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
        aria-expanded={expanded}
        aria-controls={contentId}
        id={`${contentId}-button`}
      >
        <h3 className="font-bold">{heading}</h3>
        <div
          className={twMerge(
            "transition-transform duration-300",
            expanded ? "rotate-135" : "rotate-0",
          )}
        >
          <IconPlus className="text-blaze" />
        </div>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={`${contentId}-button`}
        className={twMerge(
          "grid overflow-hidden transition-[grid-template-rows]",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div
          className={twMerge(
            "min-h-0 transition-[visibility] duration-300",
            expanded ? "visible" : "invisible",
          )}
        >
          <RichText content={text} className="p-5 pt-0" />
        </div>
      </div>
    </div>
  );
}

export default Details;
