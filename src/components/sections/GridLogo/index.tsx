"use client";

import React from "react";
import { Props } from "./types";
import Image from "next/image";
import Section from "@components/common/Section";
import SectionHeader from "@components/common/SectionHeader";

const GridLogo = ({
  heading,
  body,
  button = {},
  gridLogo = [],
  theme = "linen",
  attributes,
}: Props) => {

  const { text: buttonText = "", url: buttonUrl = "" } = button;

  return (
    <Section
      name="grid-logo"
      attributes={attributes}
      theme={theme}>

      <SectionHeader
        heading={heading}
        text={body}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />

      <div className="max-w-6xl mx-auto md:px-6 text-left">

        <div className="flex flex-col md:flex-row gap-6">
          {gridLogo.map((p, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-rows-[90px_1fr] gap-5 border border-dune p-7 md:py-[48px] rounded-2xl md:px-[52px]">
              <Image
                alt="logo"
                src={p.image}
                width={240}
                height={83}
                className="object-contain h-16 md:h-[83px] object-left"
              />
              <div className="flex flex-col gap-3 md:gap-4.5">
                <div className="text-2xl font-semibold leading-[30px]">{p.title}</div>
                <div className="prose" dangerouslySetInnerHTML={{ __html: p.content }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


export default GridLogo;
