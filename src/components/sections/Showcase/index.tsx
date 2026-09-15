import Image from "next/image";
import RichText from "@components/common/RichText";
import { ShowcaseProps } from "./types";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";
import Section from "@components/common/Section";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import { SvgRightLarge } from "@components/common/Svg/svgs";

function Showcase({
  items = [],
  attributes,
  theme,
  showLineSvg,
}: ShowcaseProps) {
  return (
    <Section
      name="showcase"
      attributes={attributes}
      theme={theme}
      className="relative"
    >
      {showLineSvg && (
        <SvgAnimateOnScroll className="absolute -top-[85%] right-10 z-0 hidden h-full w-auto md:block">
          <SvgRightLarge />
        </SvgAnimateOnScroll>
      )}

      <div className="relative z-1 grid gap-x-6 gap-y-10 md:grid-cols-12 md:gap-y-30">
        {items.map((item, index) => (
          <Fragment key={index}>
            <Image
              className={twMerge(
                "h-full w-full rounded-2xl object-cover md:col-span-6 md:row-span-2 lg:col-span-5",
                index === 1 ? "lg:col-start-8" : "",
              )}
              src={item.image}
              alt={`Showcase image - ${item.heading}`}
              width={486}
              height={456}
            />
            <div
              className={twMerge(
                "md:col-span-6 lg:col-span-5",
                index === 1 ? "md:row-start-3" : "lg:col-start-8",
              )}
            >
              <h2 className="mb-6 font-serif text-5xl md:text-6xl lg:text-7xl">
                {item.heading}
              </h2>
              <RichText content={item.text} />
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}

export default Showcase;
