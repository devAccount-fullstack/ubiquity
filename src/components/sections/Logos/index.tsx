import SectionHeader from "@components/common/SectionHeader";
import { LogosProps } from "./types";
import Section from "@components/common/Section";
import "./styles.css";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

function Logos({
  theme,
  logos = [],
  divider,
  dividerColor,
  attributes,
  heading,
  text,
  buttonText,
  buttonUrl,
}: LogosProps) {
  const isSlider = logos.length > 6;

  // Memoize loopedLogos for slider
  const loopedLogos = useMemo(
    () => (isSlider ? Array.from({ length: 3 }, () => logos).flat() : []),
    [isSlider, logos],
  );

  // Memoize logos for mobile slider effect
  const displayLogos = useMemo(() => {
    if (isSlider) return loopedLogos;
    if (logos.length === 0) return [];
    // Duplicate for mobile slider effect
    return [
      ...logos,
      ...logos.map((image, idx) => ({
        ...image,
        _isDuplicate: true,
        _originalIndex: idx,
      })),
    ];
  }, [isSlider, logos, loopedLogos]);

  return (
    <Section
      name="logos"
      theme={theme}
      attributes={attributes}
      className={twMerge(
        "relative z-10 md:[.hero+.logos]:-mt-38",
        theme !== "linen" && "lg:pt-14 lg:pb-14",
      )}
    >
      <SectionHeader
        heading={heading}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />
      <div
        className={`overflow-hidden py-5 md:py-10 ${
          isSlider ? "is-logo-slider" : "is-mobile-slider"
        }`}
      >
        <div
          className={`logos-slider-container flex items-center gap-6 ${
            isSlider ? "" : "flex-wrap justify-evenly"
          } mobile-marquee-slider`}
        >
          {displayLogos.map((image, index) => {
            const isDuplicate = (image as { _isDuplicate?: boolean })
              ._isDuplicate;
            const imgClass =
              "max-w-30 md:max-w-40 h-auto" +
              (!isSlider && isDuplicate ? " md:hidden" : "");

            return (
              // Do not use Image component here as we dont know the dimensions of the images
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${index}-${image.image}`}
                src={image.image}
                alt="Logo"
                loading="lazy"
                decoding="async"
                className={imgClass}
                width="auto"
                height="auto"
              />
            );
          })}
        </div>
      </div>

      {divider && (
        <div className="col-span-3 md:col-span-6">
          <hr className={`border-t border-${dividerColor}`} />
        </div>
      )}
    </Section>
  );
}

export default React.memo(Logos);
