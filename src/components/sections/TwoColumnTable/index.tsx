"use client";
import React from "react";
import { Props } from "./types";
import Section from "@components/common/Section";
import SectionHeader from "@components/common/SectionHeader";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function TwoColumnTable({
  backgroundImage = '',
  heading,
  rows,
  theme = "linen",
  attributes,
}: Props) {

  return (
    <Section name="two-column-table" attributes={attributes} theme={theme}>
      <div className={twMerge("relative z-0", backgroundImage && 'pb-14 pt-7')}>
        {backgroundImage && (
          <Image src={backgroundImage} alt={heading} width={760} height={1198} className="absolute -left-16 top-0 rounded-[20px] overflow-hidden -z-[1] max-w-3xl w-full h-full object-cover"/>
        )}

        <SectionHeader
          heading={heading}
          wideTitle
          align="left"     
        />

        <div className={twMerge("max-w-[950px] mx-auto lg:mb-20 mb-10", backgroundImage && 'md:pl-14 ')}>
          <div className="space-y-4 md:space-y-2">
            {rows.map((row, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row border-separate text-mosswood"
              >
                {/* Left / Label */}
                <div className="flex items-center justify-center text-center w-full md:w-5/12 h-full min-h-14 md:min-h-28 px-6 md:px-12 py-5 bg-mosswood text-white text-lg md:text-xl lg:text-2xl leading-[30px] font-semibold rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none">
                  {row.label}
                </div>

                {/* Right / Content */}
                <div className="flex items-center justify-start w-full md:w-7/12 h-full min-h-14 md:min-h-28 px-6 md:px-12 py-5 text-left bg-mist text-mosswood  text-base leading-6 rounded-b-[20px] md:rounded-r-[20px] md:rounded-bl-none">
                  {row.right}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
