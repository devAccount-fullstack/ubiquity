"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SectionProps } from "./types";

function Section(props: SectionProps) {
  const {
    children,
    name,
    attributes: {
      "builder-id": builderId,
      className: attributesClassName,
      key: attributesKey,
      style: attributesStyle,
      ...attributesRest
    },
    tag = "div",
    className,
    theme = "linen",
    width = "default",
    splitThemeOn = false,
    splitThemeMiddle = true,
    splitThemeClass,
    splitThemeColor,
    containerClassName,
    sectionRef,
    ...rest
  } = props;

  const Tag: React.ElementType = tag || "div";

  const bgColors = {
    blaze: "bg-blaze",
    obsidian: "bg-obsidian",
    mosswood: "bg-mosswood",
    dune: "bg-dune",
    linen: "bg-linen",
    mist: "bg-mist",
    claret: "bg-claret",
    tundra: "bg-tundra",
  };

  const textColor = {
    blaze: "text-obsidian",
    obsidian: "text-white",
    mosswood: "text-white",
    dune: "text-obsidian",
    linen: "text-obsidian",
    mist: "text-obsidian",
    claret: "text-white",
    tundra: "text-white",
  };

  const cleanedClassName = attributesClassName
    ? attributesClassName.replace(/\s*css-[^\s]+/g, "")
    : "";

  const defaultWidth = "mx-auto w-full max-w-6xl px-7";
  const wideWidth = "mx-auto w-full max-w-7xl px-7";
  const bgClasses = `[.${bgColors[theme]}+.${bgColors[theme]}]:pt-0 [.has-split-${theme}+.${bgColors[theme]}]:pt-0`;

  const [themeSplitHeight, setThemeSplitHeight] = useState("33%");
  const internalRef = useRef<HTMLDivElement | null>(null);

  const selectedRef = sectionRef || internalRef;

  useEffect(() => {
    const calculateHeight = () => {
      if (selectedRef && selectedRef.current) {
        if (splitThemeClass && selectedRef.current) {
          const item = selectedRef.current.querySelector(
            splitThemeClass,
          ) as HTMLElement;

          if (item) {
            const sectionRect = selectedRef.current.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();
            const sectionHeight = sectionRect.height;
            const itemSplit = splitThemeMiddle ? itemRect.height / 2 : 0;

            const distanceFromBottom =
              sectionHeight - (itemRect.top - sectionRect.top) - itemSplit;
            setThemeSplitHeight(`${distanceFromBottom}px`);
          }
        }
      }
    };

    if (splitThemeOn) {
      calculateHeight();
      window.addEventListener("resize", calculateHeight);
    }

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, [splitThemeClass, splitThemeOn, splitThemeMiddle, selectedRef]);

  return (
    <Tag
      data-section={name}
      builder-id={builderId}
      ref={selectedRef}
      key={attributesKey}
      className={twMerge(
        cleanedClassName,
        name,
        "section pt-14 pb-14 lg:pt-38 lg:pb-38",
        bgColors[theme],
        textColor[theme],
        bgClasses,
        splitThemeOn && `has-split-theme has-split-${splitThemeColor}`,
        className,
      )}
      style={{
        background: splitThemeOn
          ? `linear-gradient(0deg, var(--color-${splitThemeColor}) ${themeSplitHeight}, var(--color-${theme}) ${themeSplitHeight})`
          : false,
        ...attributesStyle,
      }}
      {...attributesRest}
      {...rest}
    >
      {width === "full" ? (
        children
      ) : (
        <div
          className={twMerge(
            width === "wide" ? wideWidth : defaultWidth,
            containerClassName,
          )}
        >
          {children}
        </div>
      )}
    </Tag>
  );
}

export default Section;
