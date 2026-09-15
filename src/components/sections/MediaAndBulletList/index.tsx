"use client";

import React from "react";
import { Props } from "./types";
import Button from "@components/common/Button";
import Image from "next/image";
import Icon from "@/assets/img/check-circle.svg?url";
import Section from "@components/common/Section";
import { twMerge } from "tailwind-merge";

const MediaAndBulletList = ({
  logo,
  heading,
  body,
  bulletList = [],
  button = {},
  image,
  reverseColumns = false,
  theme = "linen",
  attributes,
}: Props) => {
  const { text, url } = button;

  return (
    <Section 
      name="media-and-bullet-list"
      attributes={attributes}
      theme={theme}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        <div className="flex flex-col gap-8 justify-start">
          {logo && (
            <Image
              src={logo}
              alt={`${heading} logo`}
              width={240}
              height={68}
              style={{ objectFit: "contain" }}
              className=""
            />
          )}

          {(heading || body) && (
            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-balance">{heading}</h2>
              { body && (
                <div className="prose" dangerouslySetInnerHTML={{ __html: body }}
                />
              )}
            </div>
          )}

          <ul className="flex flex-col gap-4">
            {bulletList.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image width={25} height={25} src={Icon} alt="Check circle" className="mb-0" />
                <li dangerouslySetInnerHTML={{ __html: item.content }} className="prose" />
              </div>
            ))}
          </ul>

          {text && url && (
            <Button
              href={url}
              variant="primary"
              asLink
              className="w-fit">
              {text}
            </Button>
          )}
        </div>

        {image && (
          <div className={twMerge(
            reverseColumns && "order-first",
            "relative h-full"
          )}>
            <Image
              src={image}
              alt="bg-image"
              className="rounded-t-2xl h-full object-cover md:rounded-2xl"
              width={587}
              height={700}
            />
          </div>
        )}

      </div>
    </Section>
  );
}


export default MediaAndBulletList;
