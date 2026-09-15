"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import RichText from "@components/common/RichText";
import LocationPin from "@/assets/img/location-pin.svg";
import SwiperNextButton from "@components/common/Swiper/SwiperNextButton";
import SwiperPrevButton from "@components/common/Swiper/SwiperPrevButton";
import SwiperFractions from "@components/common/Swiper/SwiperFractions";
import { LocationSliderProps } from "./types";
import Section from "@components/common/Section";
import Card from "@components/common/Cards/Card";

function LocationSlider({ componentId, locations, theme, attributes }: LocationSliderProps) {
  return (
    <Section
      name="location-slider"
      attributes={attributes}
      theme={theme}
      width="full"
      className="py-0 lg:py-0"
    >
      <div id={componentId}>
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
          {locations &&
            locations.map((location, index) => (
              <SwiperSlide key={index}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="px-7 md:py-25 md:pr-2 md:pl-6 order-2 md:order-1">
                    <div className="grid h-full w-full max-w-xl grid-cols-6 gap-6 md:ml-auto">
                      <div className="col-span-6 flex flex-col justify-between gap-6 md:col-span-5 md:gap-10">
                        <div className="h-4 md:h-10"></div>
                        <div>
                          {location.heading && (
                            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-10 md:mt-0">
                              {location.heading}
                            </h2>
                          )}
                          {location.subheading && (
                            <div className="mt-2 font-semibold">
                              {location.subheading}
                            </div>
                          )}
                          {location.text && (
                            <RichText
                              content={location.text}
                              className="mt-5"
                            />
                          )}
                        </div>
                        <div className="space-y-4 mb-10 md:mb-0">
                          {location.offices &&
                            location.offices.map((office, officeIndex) => (
                              <Card
                                key={officeIndex}
                                className="bg-linen flex-row gap-4 p-3"
                              >
                                <LocationPin width="50" height="30" className="min-w-[50px]" />
                                <div>
                                  {office.name && (
                                    <h3 className="font-semibold">
                                      {office.name}
                                    </h3>
                                  )}
                                  {office.address && (
                                    <RichText
                                      content={office.address}
                                      className="prose-p:mb-0 prose-p:mt-0 prose-p:leading-6"
                                    />
                                  )}
                                </div>
                              </Card>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative max-h-[250px] md:max-h-none md:order-1">
                    {location.image && (
                      <Image
                        src={location.image}
                        alt={location.heading || "Location Image"}
                        width={800}
                        height={800}
                        className="inset-0 h-full w-full object-cover object-center md:absolute"
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          <div slot="container-start">
            <div className="absolute top-0 right-0 left-0 z-10 h-0">
              <div className="mx-auto h-0 w-full max-w-6xl px-7">
                <div className="mt-75 md:mt-25 flex h-0 items-center gap-3">
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

export default LocationSlider;
