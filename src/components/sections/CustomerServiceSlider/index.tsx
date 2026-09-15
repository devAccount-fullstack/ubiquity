"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import RichText from "@components/common/RichText";
import SwiperNextButton from "@components/common/Swiper/SwiperNextButton";
import SwiperPrevButton from "@components/common/Swiper/SwiperPrevButton";
import SwiperFractions from "@components/common/Swiper/SwiperFractions";
import { CustomerServiceSliderProps } from "./types";
import Section from "@components/common/Section";
import Grid from "@components/common/Grid";
import Card from "@components/common/Cards/Card";

function CustomerServiceSlider({
  slides,
  theme,
  attributes,
}: CustomerServiceSliderProps) {
  return (
    <Section
      name="customer-service-slider"
      attributes={attributes}
      theme={theme}
      width="full"
      className="relative overflow-hidden py-0 lg:py-0"
    >
      <div>
        <Swiper
          loop={true}
          allowTouchMove={false}
          modules={[Navigation, Pagination, A11y]}
          navigation={{
            nextEl: ".swiper-next-button",
            prevEl: ".swiper-prev-button",
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "fraction",
          }}
          enabled={true}
          autoHeight={true}
        >
          {slides &&
            slides.map((slide, index) => (
              <SwiperSlide key={index} className="pb-8 md:pb-25">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="px-7 md:pt-25 md:pr-2 md:pb-15 md:pl-6">
                    <div className="grid h-full w-full max-w-xl grid-cols-6 gap-6 md:ml-auto">
                      <div className="col-span-6 flex flex-col justify-between gap-6 md:col-span-5 md:gap-15">
                        <div className="h-25 md:h-10"></div>
                        <div>
                          {slide.heading && (
                            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">
                              {slide.heading}
                            </h2>
                          )}
                          {slide.text && (
                            <RichText content={slide.text} className="mt-5" />
                          )}
                          {slide.buttonText && slide.buttonUrl && (
                            <a
                              href={slide.buttonUrl}
                              className="mt-5 flex hidden font-bold text-white underline md:block"
                            >
                              {slide.buttonText}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Grid
                  className={`relative z-10 mx-auto w-full max-w-6xl px-7 pt-10 md:pt-0`}
                  desktop={slide.stats?.length}
                >
                  {slide.stats &&
                    slide.stats.map((stat, index) => {
                      const textWithSource = stat.text
                        ? stat.text
                            .replace(
                              "(",
                              "<span style='font-size: 0.8em; display: block; opacity: 0.5;'>(",
                            )
                            .replace(")", ")</span>")
                        : "";
                      return (
                        <Card
                          key={index}
                          className="bg-linen gap-0 text-center"
                        >
                          <span className="text-blaze mb-2 font-serif text-4xl md:text-5xl lg:text-7xl">
                            {stat.stat}
                          </span>
                          <RichText content={textWithSource || ""} />
                        </Card>
                      );
                    })}
                  {slide.buttonText && slide.buttonUrl && (
                    <a
                      href={slide.buttonUrl}
                      className="mt-2 font-bold text-white underline md:hidden"
                    >
                      {slide.buttonText}
                    </a>
                  )}
                </Grid>

                {slide.image && (
                  <div className="max-md:hidden md:absolute md:top-0 md:right-0 md:z-0 md:h-full md:w-1/2">
                    <Image
                      src={slide.image}
                      alt="bg-image"
                      fill={true}
                      className="object-cover max-md:w-6/12 max-sm:hidden"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          <div slot="container-start max-sm:hidden">
            <div className="absolute top-0 right-0 left-0 z-10 h-0">
              <div className="mx-auto h-0 w-full max-w-6xl px-7">
                <div className="mt-15 flex h-0 items-center gap-3 md:mt-25">
                  <SwiperPrevButton className="text-tundra" />
                  <SwiperFractions className="font-bold" />
                  <SwiperNextButton className="text-tundra" />
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </Section>
  );
}

export default CustomerServiceSlider;
