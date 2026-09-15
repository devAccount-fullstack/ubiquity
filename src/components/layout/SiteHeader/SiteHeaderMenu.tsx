"use client";

import MenuInactive from "@/assets/img/menu-inactive.svg";
import MenuActive from "@/assets/img/menu-active.svg";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

type SiteHeaderMenuProps = {
  children: React.ReactNode;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
};

const SiteHeaderMenu = ({ children, isActive, setIsActive }: SiteHeaderMenuProps) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isActive]);

  return (
    <>
      <button
        className="my-1 mr-3 flex h-14 w-14 cursor-pointer items-center justify-center xl:hidden"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="sr-only">Menu</span>
        <MenuInactive
          width="26px"
          height="22px"
          className={twMerge(
            "absolute transition-all duration-300",
            isActive ? "scale-80 opacity-0" : "scale-100 opacity-100 delay-100",
          )}
        />
        <MenuActive
          width="26px"
          height="22px"
          className={twMerge(
            "absolute transition-all duration-300",
            isActive ? "scale-100 opacity-100 delay-100" : "scale-80 opacity-0",
          )}
        />
      </button>
      <div
        className={twMerge(
          "bg-mosswood h-dvh w-full grow overflow-y-auto transition-[max-height] duration-600 ease-in-out xl:static xl:h-auto xl:w-auto xl:overflow-visible xl:bg-transparent",
          isActive
            ? "max-h-[calc(100dvh-56px)] xl:max-h-none"
            : "max-h-0 xl:max-h-none",
        )}
      >
        {children}
      </div>
    </>
  );
};

export default SiteHeaderMenu;
