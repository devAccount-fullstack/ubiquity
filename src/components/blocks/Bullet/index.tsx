"use client";
import RichText from "@components/common/RichText";
import { BulletProps } from "./types";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import Icon from "@components/common/Icon";

function Bullet({
  attributes: {
    "builder-id": builderId,
    className: attributesClassName,
    key: attributesKey,
    style: attributesStyle,
    ...attributesRest
  },
  text,
  bulletType = "check",
}: BulletProps) {
  const cleanedClassName = attributesClassName
    ? attributesClassName.replace(/\s*css-[^\s]+/g, "")
    : "";

  const [bulletNum, setBulletNum] = useState<number>(1);

  useEffect(() => {
    const findIndex = () => {
      let count = 0;
      const current = document.querySelector(`[builder-id="${builderId}"]`);
      if (current && current.parentElement) {
        let sibling = current.previousElementSibling;
        while (sibling) {
          if (sibling.getAttribute("data-section") === "bullet") {
            count++;
          }
          sibling = sibling.previousElementSibling;
        }
      }
      setBulletNum(count + 1);
    };

    findIndex();
  }, [builderId]);

  return (
    <div
      data-section="bullet"
      builder-id={builderId}
      key={attributesKey}
      className={twMerge(cleanedClassName, "flex")}
      style={attributesStyle}
      {...attributesRest}
    >
      <div className="w-10 shrink-0">
        {bulletType === "circle" && (
          <span className="bg-blaze mt-2 ml-3 block h-2 w-2 rounded-full"></span>
        )}
        {bulletType === "number" && (
          <span className="text-blaze block font-serif text-4xl md:text-5xl">
            {bulletNum}
          </span>
        )}
        {bulletType === "check" && (
          <Icon
            icon="checkmark-fill"
            size={24}
            className={twMerge("fill-blaze stroke-white")}
          />
        )}
      </div>
      <p className="first-of-type:mt-0 [&>strong]:block">
        <RichText content={text} noWrapper />
      </p>
    </div>
  );
}

export default Bullet;
