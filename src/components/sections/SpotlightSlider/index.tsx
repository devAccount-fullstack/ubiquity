"use client";

import Button from "@components/common/Button";
import RichText from "@components/common/RichText";
import Section from "@components/common/Section";
import ContentBlock from "@components/common/ContentBlock";
import Image from "next/image";
import { useState, Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { SpotlightSliderProps } from "./types";
import Card from "@components/common/Cards/Card";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import { SvgLeft, SvgSpotlightRight } from "@components/common/Svg/svgs";

function SpotlightSlider({
  heading,
  text,
  buttonText,
  buttonLink,
  items,
  theme,
  showLineSvg,
  attributes,
}: SpotlightSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      name="spotlight-slider"
      attributes={attributes}
      theme={theme}
      className="relative"
    >
      {showLineSvg && (
        <>
          <SvgAnimateOnScroll className="absolute -top-[25%] left-0 z-0 hidden h-full w-[253px] lg:block">
            <SvgLeft className="line-fast" />
          </SvgAnimateOnScroll>

          <SvgAnimateOnScroll className="absolute right-0 bottom-[35%] z-0 hidden h-full w-[758px] lg:block">
            <SvgSpotlightRight />
          </SvgAnimateOnScroll>
        </>
      )}

      <div className="relative z-1 grid gap-6 md:grid-cols-12">
        <div className="mb-5 md:mb-0 md:col-span-5">
          <ContentBlock
            heading={heading}
            text={text}
            buttonText={buttonText}
            buttonUrl={buttonLink}
          />
          <ul className="mt-20 hidden md:grid">
            {items &&
              items.map((item, index) => (
                <li
                  key={index}
                  className={twMerge(
                    activeIndex === index ? "group/slidernav active" : "",
                  )}
                >
                  {item.heading && (
                    <button
                      className="w-full cursor-pointer text-left"
                      onClick={() => setActiveIndex(index)}
                    >
                      <span className="group-[.active]/slidernav:bg-mist inline-flex items-center rounded py-3 text-xl transition-all duration-300 ease-in-out group-[.active]/slidernav:my-3 group-[.active]/slidernav:px-6 group-[.active]/slidernav:pl-3 group-[.active]/slidernav:font-semibold">
                        {activeIndex === index && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#ff5c38"
                            className="mr-2 size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {item.heading}
                      </span>
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <div className="grid h-full grid-cols-7 md:gap-6">
            {items &&
              items.map((item, index) => (
                <Fragment key={index}>
                  <div
                    className={twMerge(
                      "col-span-7 md:col-span-6 md:col-end-[-1] md:row-span-full lg:col-span-6 lg:col-end-[-1]",
                      index === activeIndex ? "z-10" : "z-0",
                    )}
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.heading || "Spotlight Image"}
                        className={twMerge(
                          "aspect-47/30 h-full w-full rounded-t-2xl object-cover transition-opacity duration-1000 ease-in-out md:rounded-2xl",
                          index === activeIndex
                            ? "md:opacity-100"
                            : "md:opacity-0",
                        )}
                        width={587}
                        height={700}
                      />
                    )}
                  </div>
                  <div
                    className={twMerge(
                      "z-11 col-span-7 mb-6 flex last:mb-0 md:col-span-6 md:col-start-1 md:row-span-full md:mb-0 lg:col-span-4 lg:col-start-1",
                      index === activeIndex ? "z-20" : "z-11",
                    )}
                  >
                    <Card
                      large
                      className={twMerge(
                        "mt-auto gap-3 rounded-t-none transition-all duration-700 ease-in-out md:mb-14 md:gap-5 md:rounded-2xl",
                        index === activeIndex
                          ? "md:translate-x-[0] md:opacity-100"
                          : "md:translate-x-[20px] md:opacity-0",
                      )}
                    >
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt={item.heading || "Icon"}
                          width={38}
                          height={38}
                        />
                      )}
                      {item.heading && (
                        <h3 className="text-xl font-semibold md:text-2xl">
                          {item.heading}
                        </h3>
                      )}
                      {item.text && <RichText content={item.text} />}
                      {item.buttonLink && item.buttonText && (
                        <Button
                          href={item.buttonLink}
                          asLink
                          variant="link"
                          withArrow
                        >
                          {item.buttonText}
                        </Button>
                      )}
                    </Card>
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SpotlightSlider;
