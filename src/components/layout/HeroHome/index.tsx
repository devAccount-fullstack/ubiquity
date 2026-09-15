import Button from "@components/common/Button";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import type { HeroHomeProps } from "./types";
import "./styles.css";
import Section from "@components/common/Section";
import RichText from "@components/common/RichText";
import { SvgAnimateOnScroll } from "@components/common/Svg";

function HeroHome({
  heading,
  text,
  image,
  imageForeground,
  imageMobile,
  buttonText,
  buttonUrl,
  attributes,
}: HeroHomeProps) {
  return (
    <Section
      name="hero-home"
      theme="mosswood"
      attributes={attributes}
      className="mt-0 py-0 lg:mt-0 lg:py-0"
      width="full"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl overflow-visible px-7 py-10 pt-30 md:h-dvh">
        <div className="grid h-full grid-cols-12 items-center md:gap-x-20 md:gap-y-10">
          <div className="col-span-12 md:col-span-6">
            {heading && (
              <h1 className="font-serif text-6xl text-balance capitalize md:col-end-5 md:text-7xl lg:text-8xl">
                <RichText content={heading} noWrapper />
              </h1>
            )}
            {text && <RichText content={text} className="mt-5 text-white" />}
            <Button href={buttonUrl} variant="primary" asLink className="mt-8">
              {buttonText}
            </Button>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>

      <Image
        src={image || ""}
        alt={heading || "Hero Image"}
        width={1920}
        height={1080}
        priority
        className={twMerge(
          "z-0 w-full object-cover md:absolute md:top-0 md:left-0 md:h-screen lg:pt-0",
          imageMobile ? "hidden md:block" : "",
        )}
      />

      {imageMobile && (
        <Image
          priority
          src={imageMobile}
          alt={heading || "Hero Image Mobile"}
          width={1920}
          height={1080}
          className="block md:hidden"
        />
      )}

      <SvgAnimateOnScroll className="svg-layer absolute inset-0 left-[50%] z-0 hidden w-[50%] lg:block">
        <svg
          id="line02"
          className="svg-el"
          viewBox="0 0 461 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="461"
          height="135"
        >
          <g clipPath="url(#clip0_2226_9239)">
            <path
              className="animated-path-home-hero line-2"
              d="M0.5 71.3796C22.9117 57.9164 47.2237 45.8212 73.1378 35.5041C237.881 -30.0847 404.986 1.02446 446.376 104.988C447.822 108.62 449.095 112.292 450.199 116"
              stroke="white"
              strokeWidth="1.39"
            />
            <ellipse
              className="line-2-animated-dot-1"
              cx="454.486"
              cy="128.466"
              rx="6.48601"
              ry="6.46644"
              fill="#FF5C38"
              style={{ opacity: 0 }}
            />
          </g>
          <defs>
            <clipPath id="clip0_2226_9239">
              <rect width="461" height="135" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </SvgAnimateOnScroll>

      {imageForeground && (
        <Image
          src={imageForeground || ""}
          alt={heading || "Hero Foreground"}
          width={1920}
          height={1080}
          className="absolute top-0 left-0 z-9 hidden h-screen w-full object-cover md:block"
        />
      )}

      <SvgAnimateOnScroll className="svg-layer absolute inset-0 left-[50%] z-10 hidden w-[50%] lg:block">
        <svg
          id="line01"
          className="svg-el"
          viewBox="0 0 197 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animated-path-home-hero line-1"
            d="M10 63.6639C28.7162 24.2647 51.8057 1 76.7865 1C136.503 1 185.412 133.946 189.608 302.436"
            stroke="white"
            strokeWidth="1.39231"
          />
          <ellipse
            id="dot1"
            className="line-1-animated-dot-1"
            cx="6.50542"
            cy="76.1102"
            rx="6.48601"
            ry="6.46644"
            fill="#FF5C38"
            style={{ opacity: 0 }}
          />
          <ellipse
            className="line-1-animated-dot-2"
            cx="190.109"
            cy="316.861"
            rx="6.48601"
            ry="6.46644"
            fill="#FF5C38"
            style={{ opacity: 0 }}
          />
        </svg>

        <svg
          id="line03"
          className="svg-el"
          viewBox="0 0 153 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2226_9243)">
            <path
              className="animated-path-home-hero line-3"
              d="M132.712 10.6293C83.5471 26.8966 42.324 54.581 13.7273 88.2731"
              stroke="white"
              strokeWidth="1.39231"
            />
            <ellipse
              className="line-3-animated-dot-1"
              cx="146.486"
              cy="6.46644"
              rx="6.48601"
              ry="6.46644"
              fill="#FF5C38"
              style={{ opacity: 0 }}
            />
            <ellipse
              className="line-3-animated-dot-2"
              cx="6.48601"
              cy="99.4664"
              rx="6.48601"
              ry="6.46644"
              fill="#FF5C38"
              style={{ opacity: 0 }}
            />
          </g>
        </svg>
      </SvgAnimateOnScroll>
    </Section>
  );
}

export default HeroHome;
