"use client";
import { useEffect, useState } from "react";

const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const useTailwindBreakpoints = (query: keyof typeof screens): boolean => {
  const [isMatch, setMatch] = useState<boolean>(false);
  const onChange = (e: MediaQueryListEvent) => setMatch(e.matches);
  useEffect(() => {
    const mediaQuery = `(min-width: ${screens[query]})`;
    const matchQueryList = window.matchMedia(mediaQuery);
    setMatch(matchQueryList.matches);
    matchQueryList.addEventListener("change", onChange);
    return () => matchQueryList.removeEventListener("change", onChange);
  }, [query]);
  return isMatch;
};

export default useTailwindBreakpoints;
