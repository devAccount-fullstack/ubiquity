"use client";

import { useEffect, useState } from "react";
import { PopupProps } from "./types";
import CloseIcon from "@/assets/img/icon-close.svg";
import Button from "@components/common/Button";
import { getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const MarketingPopup = ({
  delay = 15000,
  image,
  eyebrow,
  headline,
  subheading,
  button = {},
  theme,
}: PopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const cookie = getCookie("marketing-popup");

  useEffect(() => {
    if (cookie) return;

    const timer = setTimeout(() => setIsOpen(true), delay); // Set a timeout to open the popup after 15 seconds

    // Add a listener for exit intent to open the popup
    const listener = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        window.removeEventListener("mouseout", listener);
      }
    };

    window.addEventListener("mouseout", listener);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseout", listener);
    };

  }, [cookie, delay]);

  if (!headline || !subheading) return null;

  const { text, url } = button;
  let wrapperClass, closeClass, eyebrowClass, headlineClass, subHeadingClass, buttonClass;

  switch (theme) {
    case "claret":
      wrapperClass = "bg-claret";
      closeClass = "text-white";
      eyebrowClass = "text-blaze";
      headlineClass = "text-white";
      subHeadingClass = "text-white/90";
      buttonClass = "text-obsidian border-blaze bg-blaze hover:bg-blaze/80";
      break;

    case "blaze":
      wrapperClass = "bg-blaze";
      closeClass = "text-obsidian";
      eyebrowClass = "text-white";
      headlineClass = "text-obsidian";
      subHeadingClass = "text-obsidian/90";
      buttonClass = "text-obsidian border-white bg-white hover:bg-white/80";
      break;

    case "dune":
      wrapperClass = "bg-dune";
      closeClass = "text-obsidian";
      eyebrowClass = "text-linen";
      headlineClass = "text-obsidian";
      subHeadingClass = "text-obsidian/90";
      buttonClass = "text-[#FEFEFC] border-claret bg-claret hover:bg-claret/80";
      break;

    case "mist":
    default:
      wrapperClass = "bg-mist";
      closeClass = "text-obsidian";
      eyebrowClass = "text-blaze";
      headlineClass = "text-obsidian";
      subHeadingClass = "text-obsidian/90";
      buttonClass = "text-obsidian border-blaze bg-blaze hover:bg-blaze/80";
      break;
  }

  return (
    <AnimatePresence>
      {isOpen && !cookie && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed sm:bottom-10 bottom-0 sm:right-10 right-0 z-40 sm:size-auto size-full flex flex-col items-center justify-center sm:before:hidden before:content-[''] before:absolute before:top-0 before:bg-black/50 before:size-full"
        >
          {image && (
            <div className="max-h-52">
              <Image
                src={image}
                alt={`${headline} Image`}
                width={320}
                height={320}
                style={{ objectFit: "cover" }}
                className="rounded-t-[10px]"
              />
            </div>
          )}

          <div className={twMerge(`${wrapperClass} w-full sm:w-auto m-7 sm:min-w-80 sm:m-0 relative max-w-80 min-h-[400px] py-8 px-7 flex flex-col items-start justify-end rounded-[10px]`, image && 'rounded-t-none min-h-auto')}>
            <CloseIcon
              className={`${closeClass} absolute top-6 right-[25px] size-3.5 cursor-pointer text-base sm:text-xs`}
              onClick={() => {
                setIsOpen(false)
                setCookie("marketing-popup", true);
              }} />

            {eyebrow && (
              <p className={`${eyebrowClass} text-base font-semibold leading-4 mb-3`}>
                {eyebrow}
              </p>
            )}

            {(headline || subheading) && (
              <div className="flex flex-col items-end gap-1">
                <h2 className={`${headlineClass} text-2xl font-bold leading-[30px] mb-0`}>{headline}</h2>
                { subheading && (
                  <div
                    className={`${subHeadingClass} text-base leading-6`}
                    dangerouslySetInnerHTML={{ __html: subheading }}
                  />
                )}
              </div>
            )}

            {text && url && (
              <Button
                href={url}
                variant="primary"
                asLink
                className={`${buttonClass} mt-5 px-[18px] -tracking-[0.065em]`}>
                {text}
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MarketingPopup;
