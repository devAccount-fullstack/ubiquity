"use client";

import React from "react";
import { Props } from "./types";
import Section from "@components/common/Section";
import SectionHeader from "@components/common/SectionHeader";
import { twMerge } from "tailwind-merge";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import { SvgLeft } from "@components/common/Svg/svgs";
import FabricTexture from "@/assets/img/fabric_texture.svg";
import "./styles.css";

const TimelineStep = ({
  steps,
  content,
  index,
}: {
  steps: string;
  content: string | HTMLElement;
  index: number;
}) => {
  const isFirst = index === 0
  const isMiddle = index === 1
  const isLast = index === 2

  return (
  <div className={twMerge(
          "grid max-w-96 sm:max-w-80 gap-1.5 mx-auto",
          isMiddle && "sm:max-w-96",
          isFirst && "mr-0",
          isLast && "ml-0"
          )}>
    <div className="flex flex-row sm:flex-col items-center">
      <div className={twMerge(
          "relative min-w-8 sm:min-w-16 sm:min-h-21 flex items-center sm:items-start sm:justify-center",
          isMiddle && "sm:min-h-14"
          )}>
        <div className={twMerge(
          "w-3.5 h-3.5 rounded-full bg-light-blaze z-10 -ml-1.5 sm:ml-0 sm:-mt-1",
          isMiddle && "bg-blaze outline-1 outline-solid outline-light-blaze outline-offset-[12px]"
          )} />
      </div>

      <div className={twMerge(
        "flex flex-col items-center gap-4 p-2.5 pt-6 rounded-2xl bg-light-blaze text-[#171512] text-center opacity-50",
        isMiddle && "opacity-100 px-3 pt-7 pb-3 gap-6",
        )}>
        <p className={twMerge(
        "text-[56px] leading-16 font-serif flex items-end text-[#232122]",
        isMiddle && "text-7xl leading-20"
        )}>
          {steps}
        </p>

        <div
          className={twMerge(
            "prose bg-linen rounded-[15px] px-[30px] py-[33px] text-xs leading-5",
            isMiddle && "text-base leading-6 py-[37px]"
          )}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  </div>
)};

const HorizontalTimeline = ({
  heading,
  body,
  button = {},
  timeline = [],
  kpiSection = {},
  showSvgBottom,
  attributes,
}: Props) => {
  const { text: buttonText = "", url: buttonUrl = "" } = button;
  const { sectionTitle: kpiTitle = "", kpiTargets = [] } = kpiSection;

  return (
    <Section name="horizontal-timeline" attributes={attributes} theme={"claret"} className="relative z-0 overflow-hidden">

      <>
        <SvgAnimateOnScroll className="absolute left-0 z-0 hidden h-full w-[253px] lg:block">
          <SvgLeft className="line-fast" />
        </SvgAnimateOnScroll>
      </>

      <SectionHeader
        heading={heading}
        text={body}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />

      <div className="sm:overflow-x-auto md:overflow-hidden -mt-5">
        <div className="relative grid grid-cols-1 w-fit sm:w-full sm:grid-cols-3 gap-4 sm:gap-6 sm:min-w-[48rem] md:min-w-0 max-w-[74rem] mx-auto px-3 md:px-0 mt-5">
          <div
            className="absolute w-full h-full sm:h-0.5 left-3 sm:left-0 top-0 border-l-2 sm:border-l-0 sm:border-t-1 flex flex-col sm:flex-row items-start sm:items-center justify-between border-image-gradient"
            >
            <div className="w-1.5 h-1.5 rounded-full bg-light-blaze z-10 -mt-[1px] -ml-1 sm:ml-0" />
            <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[11px] border-t-transparent border-b-transparent border-l-[#a86762] -mt-[1px] mr-0 -mb-1.5 sm:mb-0 sm:-mr-2 -ml-1.5 sm:ml-0 rotate-90 sm:rotate-0" />
          </div>

          {timeline.map(({ steps, content }, i) => (
            <TimelineStep
              key={i}
              steps={steps}
              content={content}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-start flex-wrap text-2xl font-semibold leading-[30px] mt-20 gap-4">
        {kpiTitle && <p className="text-linen">{kpiTitle}</p>}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center py-8 px-7 w-full border-1 border-[#fdf7ea80] rounded-[30px] gap-[38px]">
          {kpiTargets.map(({ title, arrowUp, text }, i) => (
            <div key={i} className="flex flex-col gap-2.5 items-center text-center border-b md:border-b-0 md:border-r border-[#fdf7ea80] last:border-0 pb-[38px] md:pb-0 md:pr-[38px] last:pb-0 last:pr-0">
              <div className="inline text-2xl leading-[30px] text-linen">
                <span className="md:whitespace-nowrap pr-5">{title}</span>
                <span>{arrowUp ? "↑" : "↓"}</span>
              </div>
              <p className="md:whitespace-nowrap font-serif text-[45px] font-normal leading-14 text-light-blaze">{text}</p>
            </div>
          ))}
        </div>
      </div>
      
      {showSvgBottom && (
        <div className="relative pt-96 -z-[1]">
          <FabricTexture className="absolute w-6xl min-w-[123%] xl:min-w-[102vw] h-auto bottom-1/2 top-1/2 -translate-y-[54%] -left-[12%] xl:left-[calc(((100vw-1200px)/2)*-1)] right-0" />
        </div>
      )}
    </Section>
  );
};

export default HorizontalTimeline;
