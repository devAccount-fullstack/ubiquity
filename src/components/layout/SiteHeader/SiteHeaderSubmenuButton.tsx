"use client";
import ChevronDown from "@/assets/img/chevron-down.svg";

const SiteHeaderSubmenuButton = ({ link }: { link: { text: string } }) => {
  return (
    <button
      aria-label="Toggle submenu"
      className="flex w-10 grow items-center justify-end pr-8"
      aria-controls={`${link.text}-submenu`}
      aria-expanded={false}
      onClick={(e) => {
        e.preventDefault();
        if (e.currentTarget.getAttribute("aria-expanded") === "true") {
          e.currentTarget.setAttribute("aria-expanded", "false");
          e.currentTarget.blur();
        } else {
          e.currentTarget.setAttribute("aria-expanded", "true");
        }
      }}
    >
      <ChevronDown className="transition-transform group-hover/submenu:rotate-180 group-focus-within/submenu:rotate-180" />
    </button>
  );
};

export default SiteHeaderSubmenuButton;
