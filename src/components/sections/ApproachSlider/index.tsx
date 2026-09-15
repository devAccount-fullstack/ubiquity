"use client";

import { ApproachSliderProps } from "./types";
import { useRef, useState } from "react";

import Section from "@components/common/Section";
import Petal from "@components/common/BreakthoughIQ/Petal";
import RichText from "@components/common/RichText";
import SwiperPrevButton from "@components/common/Swiper/SwiperPrevButton";
import SwiperFractions from "@components/common/Swiper/SwiperFractions";
import SwiperNextButton from "@components/common/Swiper/SwiperNextButton";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  A11y,
  EffectFade,
  Pagination,
  HashNavigation,
  Navigation,
} from "swiper/modules";

function ApproachSlider({ tabs, attributes, theme }: ApproachSliderProps) {
  const textDistance = [
    { x: -120, y: -100 },
    { x: 20, y: -100 },
    { x: 0, y: 30 },
    { x: -50, y: 20 },
    { x: -100, y: 30 },
  ];

  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(100);

  return (
    <Section
      name="approach-slider"
      attributes={attributes}
      theme={theme}
      className="approach-slider pt-0 lg:pt-0"
      width="full"
    >
      <div className="bg-dune hidden md:block">
        <div className="swiper-approach-pagination mx-auto flex w-full max-w-6xl justify-between gap-6 px-7 py-12">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={twMerge(
                "text-mosswood cursor-pointer font-bold",
                activeIndex === index && "text-linen",
              )}
              onClick={() => {
                swiperRef.current?.swiper?.slideTo(index);
              }}
            >
              <RichText noWrapper content={tab.heading} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-6 gap-6 px-7 pt-10 md:grid-cols-12 lg:pt-30">
          <div className="col-span-6 md:col-span-5 lg:col-span-4">
            <Swiper
              modules={[
                A11y,
                EffectFade,
                Pagination,
                HashNavigation,
                Navigation,
              ]}
              allowTouchMove={false}
              pagination={{
                el: ".approach-slider .swiper-pagination",
                type: "fraction",
              }}
              navigation={{
                nextEl: ".approach-slider .swiper-next-button",
                prevEl: ".approach-slider .swiper-prev-button",
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="approach-slider-swiper h-full"
              hashNavigation={true}
              ref={swiperRef}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              onAfterInit={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            >
              {tabs.map((tab, index) => (
                <SwiperSlide
                  key={index}
                  data-hash={`${tab.heading
                    .replace(/\s+/g, "-")
                    .replace(/<[^>]*>/g, "")
                    .toLowerCase()}`}
                >
                  <div className="flex h-full flex-col justify-center pb-10">
                    {tab.eyebrow && (
                      <div className="mb-6 font-serif text-2xl lg:text-4xl">
                        <RichText content={tab.eyebrow} noWrapper />
                      </div>
                    )}
                    {tab.heading && (
                      <h2 className="mb-6 font-serif text-5xl md:text-6xl lg:text-7xl">
                        {tab.heading.includes("</p>") ? (
                          <RichText content={tab.heading} noWrapper />
                        ) : (
                          tab.heading
                        )}
                      </h2>
                    )}
                    {tab.text && <RichText content={tab.text} />}
                  </div>
                </SwiperSlide>
              ))}
              <div className="absolute bottom-0 z-10 flex h-10 items-center gap-3">
                <SwiperPrevButton className="text-tundra" />
                <SwiperFractions className="font-bold" />
                <SwiperNextButton className="text-tundra" />
              </div>
            </Swiper>
          </div>

          <div className="col-span-6 md:col-span-7 md:col-start-6">
            <div
              className="m-4 md:m-0"
              style={{
                aspectRatio: "1 / 0.8",
                position: "relative",
              }}
            >
              {tabs.map((tab, index) => {
                const petalRotation = index * (360 / tabs.length) - 36;
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={twMerge(
                      "group/petalwrapper absolute top-1/2 left-1/2",
                      isActive && "is-active",
                    )}
                    style={{
                      transform: `translate(-50%, -60%) rotate(${petalRotation}deg)`,
                      width: "28%",
                    }}
                  >
                    <div style={{ transform: "translateY(-30%)" }}>
                      <div
                        className="absolute left-1/2 h-px w-px"
                        style={{
                          transform: `rotate(${360 - petalRotation}deg)`,
                        }}
                      >
                        <div
                          className="w-fit cursor-pointer text-xs leading-4 opacity-70 group-hover/petalwrapper:opacity-100 group-[.is-active]/petalwrapper:opacity-100 sm:text-sm lg:text-base lg:leading-5"
                          style={{
                            transform: `translate(${textDistance[index].x}%, ${textDistance[index].y}%)`,
                          }}
                          onClick={() => {
                            swiperRef.current?.swiper?.slideTo(index);
                          }}
                        >
                          <RichText noWrapper content={tab.heading} />
                        </div>
                      </div>
                      <Petal active={isActive} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ApproachSlider;
