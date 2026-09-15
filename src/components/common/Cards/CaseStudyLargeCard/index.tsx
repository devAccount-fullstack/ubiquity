"use client";

import ReferenceLink from "@components/common/ReferenceLink";
import Image from "next/image";
import Button from "@components/common/Button";
import { CaseStudyLargeCardProps } from "./types";
import { twMerge } from "tailwind-merge";
import { useIsPreviewing } from "@builder.io/react";
import usePreviewData from "@hooks/usePreviewData";
import { updatedCategoryName } from "@utils/updatedCategoryName";

function CaseStudyLargeCard({ caseStudy, className }: CaseStudyLargeCardProps) {
  const { image, title, logo, eyebrow, subtext, link, linkText } = caseStudy;

  const isPreviewing = useIsPreviewing();
  const previewData = usePreviewData(isPreviewing, link);

  const article = {
    title: title
      ? title
      : !isPreviewing
        ? link?.value?.data?.title
        : previewData?.title,
    image: image
      ? image
      : !isPreviewing
        ? link?.value?.data?.image
        : previewData?.image,
    eyebrow: eyebrow
      ? eyebrow
      : !isPreviewing
        ? updatedCategoryName(link?.value?.data?.category)
        : previewData?.category,
  };

  return (
    <ReferenceLink reference={link} className={twMerge("block", className)}>
      <div className="bg-mist grid grid-cols-6 overflow-hidden rounded-2xl transition-colors duration-300 md:grid-cols-12 md:hover:bg-white">
        <div className="col-span-12 flex flex-col justify-center gap-6 p-8 md:col-span-7 md:p-20 md:pr-15">
          {typeof article.eyebrow === "string" &&
            article.eyebrow.trim() !== "" && (
              <div className="text-mosswood text-sm font-semibold sm:text-base">
                {article.eyebrow}
              </div>
            )}

          {article.title && (
            <h2 className="font-serif text-4xl capitalize md:text-5xl">
              {article.title}
            </h2>
          )}

          <div className="mt-2 flex w-full flex-row justify-between gap-6 lg:items-center lg:gap-2">
            {subtext && (
              <Button
                variant="link"
                className="text-mosswood p-0 text-left text-sm font-bold sm:text-base lg:whitespace-nowrap"
                withArrow
              >
                {subtext}
              </Button>
            )}
            {linkText && (
              <Button variant="link" withArrow>
                {linkText}
              </Button>
            )}

            {logo && (
              <Image
                src={`${logo}?height=40&width=200`}
                alt={`${title} Logo`}
                width={200}
                height={40}
                className="max-w-[150px] md:max-w-[200px]"
              />
            )}
          </div>
        </div>
        {article.image && (
          <Image
            src={`${article.image}?fit=cover`}
            alt={article.title || "Featured Case Study Image"}
            width={486}
            height={486}
            className="col-span-12 aspect-47/30 h-full w-full object-cover md:col-span-5 md:aspect-auto"
          />
        )}
      </div>
    </ReferenceLink>
  );
}
export default CaseStudyLargeCard;
