"use client";
import React from "react";
import { Props } from "./types";
import Section from "@components/common/Section";
import SectionHeader from "@components/common/SectionHeader";
import { twMerge } from "tailwind-merge";

export default function ComparisonTable({
  heading,
  body,
  button = {},
  leftColumnTitle,
  rightColumnTitle,
  rows,
  footerNote,
  theme = "claret",
  attributes,
}: Props) {

  const { text: buttonText = "", url: buttonUrl = "" } = button;

  return (
    <Section name="comparison-table" attributes={attributes} theme={theme}>

      <SectionHeader
        heading={heading}
        text={body}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        align="left"
        className="lg:mb-14"
      />

      <div className="overflow-x-auto sm:overflow-hidden mb-10 -mx-7 px-7 sm:px-0 sm:-mx-0">
        <table className="w-full sm:w-[calc(100%+2.5rem)] min-w-xl sm:-mx-5 border-separate border-spacing-1.5 border-t-1 border-[#fdf7ea80] !border-spacing-y-0 md:border-spacing-5 text-left pt-8">
          <thead>
            <tr>
              <th className="w-[22%]"></th>
              <th className="w-[38%] bg-light-blaze text-[#4A1E25] h-14 md:h-[84px] p-5 text-center align-middle text-lg md:text-xl lg:text-2xl leading-6 md:leading-[30px] font-semibold rounded-tr-[15px] rounded-tl-[15px]">
                {leftColumnTitle}
              </th>
              <th className="w-[38%] bg-[#7D575E] text-light-blaze h-14 md:h-[84px] p-5 text-center align-middle text-lg md:text-xl lg:text-2xl leading-6 md:leading-[30px] font-semibold rounded-tr-[15px] rounded-tl-[15px]">
                {rightColumnTitle}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;

              return (
                <tr key={i}>
                  <td className={twMerge("h-12 md:h-[84px] py-5 text-left align-middle text-white text-lg md:text-xl lg:text-2xl leading-6 md:leading-[30px] font-semibold", isLast && 'pt-5 pb-[29px]')}>
                    {row.label}
                  </td>
                  <td className={twMerge("h-12 md:h-[84px] py-[3px] px-3 text-[#171512] text-center align-middle bg-light-blaze text-sm sm:text-base leading-6", isLast && 'rounded-br-[15px] rounded-bl-[15px] pb-3 h-[57px] md:h-[93px]')}><div className="bg-linen rounded-[15px] h-full flex items-center justify-center p-3">{row.left}</div></td>
                  <td className={twMerge("h-12 md:h-[84px] py-[3px] px-3 text-[#171512] text-center align-middle bg-[#7D575E] text-sm sm:text-base leading-6", isLast && 'rounded-br-[15px] rounded-bl-[15px] pb-3 h-[57px] md:h-[93px]')}><div className="bg-linen rounded-[15px] h-full flex items-center justify-center p-3">{row.right}</div></td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>

      {footerNote && (
        <div className="border-t border-mosswood p-[18px] text-sm md:text-base text-white text-center">
          <div className="prose max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: footerNote }}/>
        </div>
      )}
    </Section>
  );
}
