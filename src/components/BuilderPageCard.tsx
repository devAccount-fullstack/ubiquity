"use client";
import Image from "next/image";
import * as React from "react";

interface BuilderPageCardProps {
  /**
   * The URL of the image to display at the top of the card
   */
  imageUrl?: string;
  /**
   * The title text to display in the card
   */
  title?: string;
  /**
   * The description text to display in the card
   */
  description?: string;
  /**
   * The URL that the card links to
   */
  linkUrl?: string;
  /**
   * Optional alt text for the image
   */
  imageAlt?: string;
}

function BuilderPageCard({
  imageUrl = "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?",
  title = "Create Builder pages in your app",
  description = "This is an example page created in Builder. Start here to review how your integration works and create new pages in your app.",
  linkUrl = "https://www.builder.io/c/docs/integrating-builder-pages#creating-a-builder-page",
  imageAlt = "Builder pages integration",
}: BuilderPageCardProps) {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto relative box-border flex w-full shrink-0 cursor-pointer flex-col justify-between overflow-hidden max-sm:max-w-[300px] max-sm:items-center"
    >
      <article className="relative box-border flex w-full shrink-0 flex-col overflow-hidden rounded-lg border border-solid border-black pb-5">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="box-border aspect-[2.22] min-h-5 w-full min-w-5 shrink-0 overflow-hidden object-cover"
        />
        <h2 className="relative mt-2.5 mb-2.5 box-border h-auto shrink-0 px-2.5 text-center font-semibold text-black">
          {title}
        </h2>
        <p className="relative mx-auto box-border h-auto w-full max-w-[450px] shrink-0 px-2.5 text-center text-xs text-black max-sm:text-center">
          {description}
        </p>
      </article>
    </a>
  );
}

export default BuilderPageCard;
