"use client";

import { useScroll } from "motion/react";
import { useLayoutEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const SiteHeaderScroll = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [atTop, setAtTop] = useState(true);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const current = scrollY.get();
      const previous = scrollY.getPrevious() ?? 0;
      const diff = current - previous;

      if (!document.body.classList.contains("overflow-hidden")) {
        if (current < 100) {
          setScrollDirection("up");
          setAtTop(true);
        } else {
          setScrollDirection(diff > 0 ? "down" : "up");
          setAtTop(false);
        }
      }
    };

    const unsubscribe = scrollY.on("change", handleScroll);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <header
      className={twMerge(
        "max-xl:bg-mosswood group/siteheader fixed top-0 z-50 w-full transition-transform duration-400",
        `is-theme-${theme}`,
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0",
        atTop ? "is-at-top" : "is-not-at-top",
      )}
    >
      <div
        className={twMerge(
          "transition-colors delay-400 duration-300",
          atTop
            ? "is-at-top xl:bg-transparent"
            : "xl:bg-mosswood is-not-at-top",
        )}
      >
        {children}
      </div>
    </header>
  );
};
export default SiteHeaderScroll;
