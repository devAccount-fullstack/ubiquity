"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { HubspotProvider } from "next-hubspot";
import React, { useEffect, useRef, useState } from "react";
import ChevronDown from "@/assets/img/chevron-down.svg";

import Section from "@components/common/Section";
import RichText from "@components/common/RichText";
import Form from "@components/sections/Form";
import { ContactUsProps } from "./types";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import { SvgHeroImageUnder } from "@components/common/Svg/svgs";

const ContactUs = ({
  heading,
  text,
  options,
  placeholder,
  attributes,
  theme,
}: ContactUsProps) => {
  const optionRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!optionRef.current) {
        return;
      }

      if (!optionRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  useEffect(() => {
    const handleLinkClick = (event: Event) => {
      const target = (event.target as HTMLElement)?.closest("a");
      if (
        target &&
        (target as HTMLAnchorElement).href === window.location.href
      ) {
        setActive(null);

        event.preventDefault();
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <HubspotProvider>
      <Section
        name="Contact Us"
        attributes={attributes}
        theme={theme}
        width="full"
        className="relative mb-10 flex min-h-screen flex-col overflow-hidden lg:mt-38 lg:pt-0"
      >
        <SvgAnimateOnScroll className="absolute -top-[700px] -right-[45%] z-0 hidden h-full rotate-65 lg:block">
          <SvgHeroImageUnder />
        </SvgAnimateOnScroll>

        <div className="mx-auto grid max-w-6xl gap-6 px-7 text-center">
          <h1 className="mb-0 flex-1 pt-20 font-serif text-6xl text-balance capitalize md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <RichText
            content={text}
            className="mt-4 mb-15 max-w-xl md:mt-6 lg:mt-8"
          />
        </div>
        {active === null && (
          <>
            <motion.div className="sm:p-b0 mx-auto w-full max-w-xl px-4 lg:max-w-2xl">
              <div ref={optionRef} className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="relative bg-dune w-full cursor-pointer rounded-lg p-5 text-start font-bold text-black z-10"
                >
                  {placeholder}
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-black" />
                </button>

                <AnimatePresence mode="wait" initial={false}>
                  {options && options.length > 0 && open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-mist w-full overflow-y-auto max-h-80 rounded-b-lg pt-8 lg:top-16 lg:right-0 lg:w-full z-9 -mt-[30px]"
                    >
                      <ul className="">
                        {options.map((option, index) => (
                          <li
                            key={option.title}
                            className="hover:bg-dune border-b border-white transition-colors duration-200 last:border-0 hover:text-black"
                          >
                            {option.link && (
                              <Link
                                href={option.link}
                                onClick={() => (
                                  setOpen(!open), setActive(null)
                                )}
                                className="flex items-center gap-4 cursor-pointer text-start w-full px-6 py-5"
                              >
                                {option.title}
                              </Link>
                            )}

                            {!option.link && (
                              <button
                                className="flex items-center gap-4 text-start w-full px-6 py-5 cursor-pointer"
                                onClick={() => (
                                  setActive(index), setOpen(!open)
                                )}
                              >
                                {option.title}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>{" "}
          </>
        )}
        {/* form section */}
        <AnimatePresence mode="wait" initial={false}>
          {active !== null && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto w-full rounded-lg bg-white px-4 px-8 py-8 md:max-w-3xl md:px-8 lg:max-w-4xl"
            >
              <Form
                portalId={
                  options[active].portalId
                    ? options[active].portalId
                    : "6711606"
                }
                formId={
                  options[active].formId
                    ? options[active].formId
                    : "91f51810-9a5f-4f60-a0cb-e047291e51c5"
                }
                buttonText={
                  options[active].buttonText
                    ? options[active].buttonText
                    : "Contact Us"
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </HubspotProvider>
  );
};

export default ContactUs;
