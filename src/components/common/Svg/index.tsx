import React, { useEffect, useRef } from "react";
import { SvgAnimateOnScrollProps } from "./types";

export const SvgAnimateOnScroll: React.FC<SvgAnimateOnScrollProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleIntersection = (
      [entry]: IntersectionObserverEntry[],
      obs: IntersectionObserver,
    ) => {
      if (entry.isIntersecting) {
        el.classList.add("start");
        obs.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    observer.observe(el);

    // Fallback: check if already in view on mount (for fast loads)
    if (
      el.getBoundingClientRect().top < window.innerHeight &&
      el.getBoundingClientRect().bottom > 0
    ) {
      el.classList.add("start");
      observer.unobserve(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`svg-animation pointer-events-none ${className}`}>
      {children}
    </div>
  );
};
