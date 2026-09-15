"use client";

import Image from "next/image";
import Section from "@components/common/Section";
import type { listMapPinProps, MapProps } from "./types";
import SectionHeader from "@components/common/SectionHeader";
import { twMerge } from "tailwind-merge";
import Button from "@components/common/Button";
import { useState } from "react";

const MapPin = ({
  marker,
  idx,
  isHovered,
  setIsHovered,
}: {
  marker: listMapPinProps;
  idx: number;
  isHovered?: number;
  setIsHovered: (hovered: number) => void;
}) => {
  const left = marker.position.left ?? 0;
  const top = marker.position.top ?? 0;

  return (
    <button
      key={`Marker-${marker?.text1 ?? idx}`}
      className={twMerge(
        "group/pin absolute mb-0 mb-1",
        isHovered === idx && "active",
      )}
      style={{ left: `${left}%`, top: `${top}%` }}
      onPointerDown={() => setIsHovered(idx)}
    >
      <div
        className={twMerge(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-0 group-hover/pin:z-10 group-hover/pin:opacity-100 group-[.active]/pin:opacity-100",
          left > 50
            ? "-left-1 -translate-x-full md:-left-5"
            : "left-1 md:left-5",
        )}
      >
        <div className="bg-[#261216] bg-transparent px-3 px-5 py-0 py-6 text-sm whitespace-nowrap text-white">
          <p className="font-bold">{marker?.text1 ?? ""}</p>
          <p>{marker?.text2 ?? ""}</p>
          <p>{marker?.text3 ?? ""}</p>
        </div>
      </div>
      <div className="bg-dune group-hover/pin:bg-blaze group-[.active]/pin:bg-blaze relative h-2 w-2 rounded-full group-hover/pin:z-10 md:h-3 md:w-3 lg:h-5 lg:w-5" />
    </button>
  );
};

const Map = ({
  text,
  heading,
  image,
  list_map_pin,
  theme,
  attributes,
  buttonUrl,
  buttonText,
}: MapProps) => {
  const [isHovered, setIsHovered] = useState<number | undefined>();

  return (
    <Section name="map" attributes={attributes} theme={theme}>
      <SectionHeader heading={heading} text={text} align="center" />
      <div className="relative px-4 md:px-6 lg:pr-10">
        <div>
          {image && (
            <div className="w-full">
              <Image
                width={1000}
                height={1000}
                src={image}
                alt={heading || "Map Image"}
                className="h-auto w-full"
                sizes="100vw"
              />
            </div>
          )}
          {list_map_pin &&
            list_map_pin.map((marker, idx) => {
              return (
                <MapPin
                  key={`MapPin-${idx}`}
                  marker={marker}
                  idx={idx}
                  isHovered={isHovered}
                  setIsHovered={setIsHovered}
                />
              );
            })}
        </div>
      </div>
      {buttonUrl && buttonText && (
        <div className="flex justify-center lg:hidden">
          <Button
            href={buttonUrl}
            variant="secondary"
            asLink
            className="mx-auto mt-8"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </Section>
  );
};

export default Map;
