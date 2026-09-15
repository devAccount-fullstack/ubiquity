import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import type { TestimonialSliderProps } from "./types";

import Testimonial from "./Testimonial";

import Section from "@components/common/Section";
import SwiperNextButton from "@components/common/Swiper/SwiperNextButton";
import SwiperPrevButton from "@components/common/Swiper/SwiperPrevButton";
import SectionHeader from "@components/common/SectionHeader";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import { SvgLeft, SvgRight } from "@components/common/Svg/svgs";

function Testimonials({
  heading,
  testimonials,
  theme,
  attributes,
  showLineSvg,
}: TestimonialSliderProps) {
  return (
    <Section
      name="testimonials"
      attributes={attributes}
      theme={theme}
      className="relative"
    >
      {showLineSvg && (
        <>
          <SvgAnimateOnScroll className="absolute left-0 z-0 hidden h-full w-[253px] lg:block">
            <SvgLeft className="line-fast" />
          </SvgAnimateOnScroll>

          <SvgAnimateOnScroll className="absolute right-0 z-0 hidden h-full w-[600px] bottom-0 lg:block">
            <SvgRight />
          </SvgAnimateOnScroll>
        </>
      )}

      <SectionHeader heading={heading} />
      {testimonials && (
        <Swiper
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".swiper-next-button",
            prevEl: ".swiper-prev-button",
          }}
          spaceBetween={150}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.navigation) {
                swiper.navigation.update();
              }
            });
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex w-full justify-center md:px-25"
            >
              <div className="max-w-full">
                <Testimonial
                  quote={testimonial.quote}
                  text={testimonial.text}
                  logo={testimonial.logo}
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  title={testimonial.title}
                  linkUrl={testimonial.linkUrl}
                  linkText={testimonial.linkText}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="flex w-full justify-center gap-3 px-6 pt-6 md:px-0 md:pt-0">
            <SwiperPrevButton className="top-1/2 left-0 z-10 md:absolute" />
            <SwiperNextButton className="top-1/2 right-0 z-10 md:absolute" />
          </div>
        </Swiper>
      )}
    </Section>
  );
}

export default Testimonials;
