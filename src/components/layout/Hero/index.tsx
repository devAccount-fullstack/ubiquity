"use client";

import Image from "next/image";
import type { HeroProps } from "./types";
import RichText from "@components/common/RichText";
import { striptags } from "@utils/striptags";
import { twMerge } from "tailwind-merge";
import Button from "@components/common/Button";
import HeroVideoPlayer from "./HeroVideoPlayer";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import {
  SvgHeroImageUnder,
  SvgHeroImageRight,
} from "@components/common/Svg/svgs";
import { useContext } from "react";
import { BuilderStoreContext } from "@builder.io/react";
import { isRichText } from "@utils/isRichText";
import { backgroundColors } from "@utils/backgroundColors";
import { textColorFromBackground } from "@utils/textColorFromBackground";

function Hero({
  heading,
  text,
  buttonUrl,
  buttonText,
  secondButtonText,
  secondButtonUrl,
  imageBelowContent,
  mediaPosition: layout = "under",
  media_type: mediaType = "image",
  image,
  poster_image: posterImage,
  small_hero_logo,
  video,
  theme,
  split_theme: split,
  split_theme_color: splitColour,
  showLineSvg,
  eyebrow,
  author,
  backgroundImage,
  mediaContent,
  attributes: {
    className: attributesClassName,
    key: attributesKey,
    ...attributesRest
  },
}: HeroProps) {
  const builderState = useContext(BuilderStoreContext);

  const heroContent = {
    heading: isRichText(heading) ? heading : builderState?.content?.data?.title,
    text: isRichText(text) ? text : "",
    image: image || builderState?.content?.data?.image,
  };

  const cleanedClassName = attributesClassName
    ? attributesClassName.replace(/\s*css-[^\s]+/g, "")
    : "";

  return (
    <div
      data-section="hero"
      key={attributesKey}
      className={twMerge(
        "section hero relative pt-22",
        theme && layout !== "full" && backgroundColors[theme],
        theme && layout !== "full"
          ? textColorFromBackground(theme)
          : "text-white",
        split && `has-split-theme has-split-${splitColour}`,
        backgroundImage && "pb-36 md:pb-20",
        cleanedClassName,
      )}
      {...attributesRest}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={striptags(heroContent.heading) || "Background Image"}
          fill
          priority
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}
      {showLineSvg && (
        <SvgAnimateOnScroll className="absolute inset-0 z-1 hidden lg:block">
          {layout === "under" && (
            <div className="mx-auto flex h-full w-full max-w-480 items-center justify-end px-7">
              <SvgHeroImageUnder />
            </div>
          )}
          {layout === "right" && (
            <div className="mx-auto flex h-full w-full max-w-360 items-center justify-start px-7">
              <SvgHeroImageRight />
            </div>
          )}
        </SvgAnimateOnScroll>
      )}
      <div
        className={twMerge(
          "relative grid grid-cols-[minmax(var(--spacing),auto)_repeat(6,minmax(0,180px))_minmax(var(--spacing),auto)] gap-x-6",
          layout === "under"
            ? "grid-rows-[auto_auto_auto_auto_calc(var(--spacing)*7)] md:grid-rows-[auto_auto_auto_calc(var(--spacing)*38)]"
            : undefined,
          layout === "right"
            ? "grid-rows-[auto_auto_auto_auto_calc(var(--spacing)*7)] md:grid-rows-[auto_auto_calc(var(--spacing)*14)_calc(var(--spacing)*24)] lg:pt-20"
            : undefined,
          layout === "full" &&
            "static h-[calc(100vh-var(--spacing)*22)] text-white",
          layout === "behind" &&
            "grid-rows-[1fr_1fr_auto_auto_calc(var(--spacing)*7)] text-white md:grid-rows-[auto_auto_auto_calc(var(--spacing)*38)]",
          layout === "none" &&
            "grid-rows-[auto_auto_auto_auto_calc(var(--spacing)*7)] md:grid-rows-[auto_auto_auto_calc(var(--spacing)*10)]",
        )}
      >
        <div
          className={twMerge(
            split ? "block" : "hidden",
            splitColour && backgroundColors[splitColour],
            "col-start-1 -col-end-1 row-start-4 -row-end-1 md:row-start-3",
            layout === "under" && "",
            layout === "right" && "",
            layout === "full" && "row-start-3 md:row-start-3",
            layout === "behind" && "row-start-2 md:row-start-2",
          )}
        ></div>
        <h1
          className={twMerge(
            "relative z-10 col-start-2 col-end-8 row-start-1 mt-auto pt-7 font-serif text-balance md:col-end-5 md:text-7xl lg:text-8xl capitalize",
            eyebrow
              ? "text-5xl md:text-6xl lg:text-7xl"
              : "text-6xl md:text-7xl lg:text-8xl",
            layout === "under" && "md:my-20 md:pt-0 lg:col-end-6 lg:my-30",
            layout === "right" && "md:pr-[17%]",
            layout === "full" && "",
            layout === "behind" && "pl-7",
            layout === "none" && "md:mt-20 md:mb-5 md:pt-0 lg:col-end-6 lg:mt-30 lg:mb-5",
          )}
        >
          {small_hero_logo && (
            <Image
              alt="hero logo"
              src={small_hero_logo}
              width={130}
              height={40}
              className="object-contain h-10 mb-4"
            />
          )}
          {eyebrow && (
            <div className="text-dune mb-6 font-sans text-base font-semibold">
              {eyebrow}
            </div>
          )}
          {heroContent.heading && (
            <RichText content={heroContent.heading} noWrapper />
          )}
        </h1>
        <div
          className={twMerge(
            "relative z-10 col-start-2",
            layout === "none" && "col-end-8 md:col-end-5",
            layout === "under" &&
              "col-end-8 row-start-2 my-7 md:col-start-5 md:row-start-1 md:my-20 lg:col-start-6 lg:my-30",
            layout === "right" &&
              "col-end-8 my-7 md:col-end-5 md:row-start-2 md:pr-[17%]",
            layout === "full" && "col-end-8 row-start-2 my-7 md:col-end-5",
            layout === "behind" &&
              "col-end-8 row-start-2 my-7 pl-7 md:col-end-5 md:row-start-2",
          )}
        >
          {heroContent.text && (
            <RichText
              content={heroContent.text}
              className={twMerge(layout === "under" && "md:pt-1")}
            />
          )}
          <div className={twMerge(
            "space-x-7 space-y-7",
            heroContent.text ? "mt-7" : undefined)}>
            {buttonUrl && buttonText && (
              <Button
                href={buttonUrl}
                variant="primary"
                asLink
                className="h-full"
              >
                {buttonText}
              </Button>
            )}
            {secondButtonUrl && secondButtonText && (
              <Button
                href={secondButtonUrl}
                variant="primary"
                asLink
                className="h-full"
              >
                {secondButtonText}
              </Button>
            )}
          </div>
          {author?.name && (
            <div className="mt-4 flex items-center space-x-4">
              {author.image && (
                <Image
                  src={author.image}
                  alt={author.name || "Author Image"}
                  width={50}
                  height={50}
                  className="h-12 w-12 rounded-full object-cover"
                  priority
                />
              )}
              <span className="font-semibold">{author.name}</span>
            </div>
          )}

          {imageBelowContent && layout !== "under" && (
            <div className="overflow-hidden rounded-4xl">
              <Image
                src={imageBelowContent}
                alt={striptags(heroContent.heading) || "Hero Image"}
                width={1200}
                height={800}
                className="h-[320px] w-full object-cover md:h-[420px]"
                priority
              />
            </div>
          )}
        </div>


        {layout !== "none" && (
        <div
          className={twMerge(
            layout === "under" &&
              "col-span-6 col-start-2 row-span-2 row-start-3 md:row-start-2 xl:-mx-6 2xl:-mx-14",
            layout === "right" &&
              "col-start-2 col-end-8 row-start-3 row-end-5 md:col-start-5 md:row-start-1 md:row-end-4 xl:-mr-6 2xl:-mr-14",
            layout === "full" &&
              "col-start-1 -col-end-1 row-start-1 -row-end-1",
            layout === "behind" &&
              "col-start-2 -col-end-2 row-start-1 row-end-3 xl:-mx-6 2xl:-mx-14",
            layout === "none" && "hidden",
            layout === "under" && imageBelowContent && "flex flex-col gap-8",
          )}
        >
          {imageBelowContent && layout === "under" && (
            <div className="overflow-hidden rounded-4xl">
              <Image
                src={imageBelowContent}
                alt={striptags(heroContent.heading) || "Hero Image"}
                width={1200}
                height={800}
                className="h-[320px] w-full object-cover md:h-[420px]"
                priority
              />
            </div>
          )}
          {mediaContent ||
            (mediaType === "video" ? (
              <HeroVideoPlayer
                videoSrc={video}
                posterSrc={posterImage}
                className={twMerge(
                  "relative z-1 h-auto max-w-full overflow-hidden rounded-4xl",
                  layout === "right" && "aspect-square h-full object-cover",
                  layout === "full" &&
                    "absolute inset-0 h-full w-full max-w-none rounded-none object-cover",
                  layout === "behind" && "h-full object-cover",
                )}
              />
            ) : (
              <Image
                src={heroContent.image}
                alt={striptags(heroContent.heading) || "Hero Image"}
                width={layout === "full" ? undefined : 1296}
                height={layout === "full" ? undefined : 740}
                fill={layout === "full"}
                priority
                className={twMerge(
                  "relative z-1 h-auto max-w-full rounded-4xl",
                  layout === "right" && "aspect-square h-full object-cover",
                  layout === "full" &&
                    "absolute inset-0 h-full w-full max-w-none rounded-none object-cover",
                  layout === "behind" && "h-full object-cover",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;