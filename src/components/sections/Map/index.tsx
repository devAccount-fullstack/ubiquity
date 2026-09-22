"use client";

import Image from "next/image";
import { useState } from "react";
import Section from "@components/common/Section";
import type {
  listMapPinProps,
  listMapCardProps,
  MapProps,
} from "./types";
import SectionHeader from "@components/common/SectionHeader";
import { twMerge } from "tailwind-merge";
import Button from "@components/common/Button";

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
  const left = marker.position?.left ?? 0;
  const top = marker.position?.top ?? 0;

  // Uses the "Label Side" field if set, otherwise flips to the left past 50%
  const labelLeft =
    (marker.labelSide ?? (left > 50 ? "left" : "right")) === "left";

  return (
    <button
      type="button"
      key={`Marker-${marker?.text1 ?? idx}`}
      aria-label={marker?.text1 || undefined}
      className={twMerge(
        "group/pin absolute -translate-x-1/2 -translate-y-1/2 hover:z-20",
        isHovered === idx && "active z-20",
      )}
      style={{ left: `${left}%`, top: `${top}%` }}
      onPointerDown={() => setIsHovered(idx)}
    >
      {/* Location text: hidden until hover (desktop) or tap (mobile) */}
      <div
        className={twMerge(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 leading-tight whitespace-nowrap text-white opacity-0 group-hover/pin:opacity-100 group-[.active]/pin:opacity-100",
          labelLeft
            ? "right-full mr-1.5 text-right md:mr-2"
            : "left-full ml-1.5 text-left md:ml-2",
        )}
      >
        <p className="text-[8px] font-bold md:text-sm">
          {marker?.text1 ?? ""}
        </p>

        {marker?.text2 && (
          <p className="text-[6px] text-white/70 md:text-xs">
            {marker.text2}
          </p>
        )}

        {marker?.text3 && (
          <p className="text-[6px] text-white/70 md:text-xs">
            {marker.text3}
          </p>
        )}
      </div>

      {/* Orange location dot */}
      <span
        className="block h-[6px] w-[6px] rounded-full bg-[#ff5c38] transition-transform group-hover/pin:scale-125 group-[.active]/pin:scale-125 md:h-[10px] md:w-[10px]"
        aria-hidden="true"
      />
    </button>
  );
};

const MapCard = ({ card }: { card: listMapCardProps }) => (
  <div
    className="absolute hidden rounded-lg border border-white/30 bg-white/10 p-2 text-white backdrop-blur-sm md:block lg:p-4"
    style={{
      left: `${card.position?.left ?? 0}%`,
      top: `${card.position?.top ?? 0}%`,
      width: `${card.width ?? 12}%`,
    }}
  >
    <p className="text-xs font-bold lg:text-sm">{card.title}</p>
    <p className="mt-1 text-[10px] leading-snug text-white/80 lg:text-xs">
      {card.text}
    </p>
  </div>
);

const Map = ({
  text,
  heading,
  image,
  list_map_pin,
  list_map_cards,
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

          {list_map_cards?.map((card, idx) => (
            <MapCard key={`MapCard-${idx}`} card={card} />
          ))}

          {list_map_pin?.map((marker, idx) => (
            <MapPin
              key={`MapPin-${idx}`}
              marker={marker}
              idx={idx}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
            />
          ))}
        </div>
      </div>

      {/* Mobile: the cards don't fit on the map, so list them below it */}
      {list_map_cards && list_map_cards.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 px-4 md:hidden">
          {list_map_cards.map((card, idx) => (
            <div
              key={`MapCardMobile-${idx}`}
              className="rounded-lg border border-white/30 bg-white/10 p-3 text-white"
            >
              <p className="text-sm font-bold">{card.title}</p>
              <p className="mt-1 text-xs text-white/80">{card.text}</p>
            </div>
          ))}
        </div>
      )}

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