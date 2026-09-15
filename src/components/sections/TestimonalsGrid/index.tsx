"use client";
import Section from "@components/common/Section";
import TestimonialCard from "@components/common/Cards/TestimonialCard";
import CaseStudyLargeCard from "@components/common/Cards/CaseStudyLargeCard";
import { TestimonalsGridProps } from "./types";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "@components/common/SectionHeader";
import Grid from "@components/common/Grid";
import RichText from "@components/common/RichText";
import Button from "@components/common/Button";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import { SvgLeft } from "@components/common/Svg/svgs";

function TestimonalsGrid({
  heading,
  headingType,
  baseText,
  baseButtonText,
  baseButtonUrl,
  theme,
  split_theme,
  split_theme_color: splitThemeColor,
  attributes,
  featuredCaseStudy,
  testimonialsTop = [],
  testimonialsBottom = [],
  showLineSvg,
}: TestimonalsGridProps) {
  const [themeSplitTopHeight, setThemeSplitTopHeight] = useState("66%");
  const [themeSplitBottomHeight, setThemeSplitBottomHeight] = useState("33%");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculateHeight = () => {
      const splitThemeClassTop = ".testimonials-grid-top .card:last-child";
      const splitThemeClassBottom =
        ".testimonials-grid-bottom .card:first-child";

      if (sectionRef.current) {
        const topItem = sectionRef.current.querySelector(
          splitThemeClassTop,
        ) as HTMLElement;

        const bottomItem = sectionRef.current.querySelector(
          splitThemeClassBottom,
        ) as HTMLElement;

        if (topItem) {
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const itemRect = topItem.getBoundingClientRect();
          const sectionHeight = sectionRect.height;
          const itemSplit = itemRect.height / 2;

          const distanceFromBottom =
            sectionHeight - (itemRect.top - sectionRect.top) - itemSplit;
          setThemeSplitTopHeight(`${distanceFromBottom}px`);
        }
        if (bottomItem) {
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const itemRect = bottomItem.getBoundingClientRect();
          const sectionHeight = sectionRect.height;
          const itemSplit = itemRect.height / 2;

          const distanceFromBottom =
            sectionHeight - (itemRect.top - sectionRect.top) - itemSplit;
          setThemeSplitBottomHeight(`${distanceFromBottom}px`);
        }
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <Section
      name="testimonials-grid"
      attributes={attributes}
      theme={theme}
      sectionRef={sectionRef}
      splitThemeOn={false}
      className="relative overflow-hidden"
      style={{
        background: split_theme
          ? `linear-gradient(0deg,var(--color-${theme}) 0%, var(--color-${theme}) ${themeSplitBottomHeight}, var(--color-${splitThemeColor}) ${themeSplitBottomHeight}, var(--color-${splitThemeColor}) ${themeSplitTopHeight}, var(--color-${theme}) ${themeSplitTopHeight}, var(--color-${theme}) 100%)`
          : "var(--color-${theme})",
      }}
    >
      {showLineSvg && (
        <SvgAnimateOnScroll className="absolute top-[10%] left-0 z-0 hidden h-full w-[253px] lg:block">
          <SvgLeft className="line-fast" />
        </SvgAnimateOnScroll>
      )}

      <SectionHeader
        heading={heading}
        align="center"
        headingType={headingType}
      />
      {testimonialsTop.length > 0 && (
        <Grid className="testimonials-grid-top">
          {testimonialsTop.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Grid>
      )}
      {featuredCaseStudy && featuredCaseStudy.link && (
        <CaseStudyLargeCard
          className="my-6 md:my-15"
          caseStudy={featuredCaseStudy}
        />
      )}
      {testimonialsBottom.length > 0 && (
        <Grid className="testimonials-grid-bottom">
          {testimonialsBottom.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Grid>
      )}

      <div className="mt-5 flex w-full flex-col items-center justify-center md:mt-20">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-1 flex flex-col items-center md:col-span-6 md:col-start-4">
            <RichText content={baseText} className="pb-10 text-center" />
            {baseButtonUrl && (
              <Button variant="primary" href={baseButtonUrl} asLink>
                {baseButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default TestimonalsGrid;
