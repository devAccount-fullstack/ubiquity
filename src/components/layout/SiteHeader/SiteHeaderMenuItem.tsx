"use client";
import ChevronDown from "@/assets/img/chevron-down.svg";

import blank from "@utils/blank";
import Link from "next/link";
import { useState } from "react";

const SiteHeaderMenuItem = ({
  link,
  setIsActive,
}: {
  link: {
    text: string;
    url: string;
    subMenu?: { text: string; url: string }[];
  };
  setIsActive: (active: boolean) => void;
}) => {
  const [subMenuActive, setSubMenuActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubMenuActive((prev) => !prev);
  };

  return (
    <li
      key={link.text}
      className={`group/submenu ${subMenuActive ? "submenu-active" : ""}`}
    >
      <div className="group-hover/submenu:text-blaze flex justify-between gap-2 text-xl xl:text-base">
        <Link
          href={link.url}
          className="grow py-4 pl-7 xl:pl-0"
          onClick={(e) => {
            setSubMenuActive(false);
            setIsActive(false);
            e.currentTarget.blur();
          }}
        >
          <span
            data-text={link.text}
            className="inline-flex flex-col after:invisible after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-text)]"
          >
            {link.text}
          </span>
        </Link>
        <button
          aria-label="Toggle submenu"
          className="flex w-10 grow items-center justify-end pr-8"
          aria-controls={`${link.text}-submenu`}
          aria-expanded={subMenuActive}
          onClick={handleClick}
        >
          <ChevronDown className="transition-transform group-[.submenu-active]/submenu:rotate-180 group-focus-within/submenu:xl:rotate-180 group-hover/submenu:xl:rotate-180" />
        </button>
      </div>
      {!blank(link.subMenu) && (
        <ul
          id={`${link.text}-submenu`}
          className="xl:bg-linen bg-dune text-obsidian max-h-0 min-w-80 overflow-hidden shadow-xl transition-[max-height] duration-600 ease-in-out group-[.submenu-active]/submenu:max-h-[calc(100dvh-56px)] xl:absolute xl:hidden xl:h-auto xl:max-h-none xl:rounded-xl group-focus-within/submenu:xl:block group-hover/submenu:xl:block group-[.submenu-active]/submenu:block"
        >
          {link.subMenu.map((subLink) => (
            <li
              key={subLink.text}
              className="border-mosswood/40 hover:bg-linen hover:xl:bg-dune border-t first:border-t-0 hover:font-semibold"
            >
              <Link
                href={subLink.url}
                className="block px-6 py-4"
                onClick={(e) => {
                  setSubMenuActive(false);
                  setIsActive(false);
                  e.currentTarget.blur();
                }}
              >
                {subLink.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SiteHeaderMenuItem;
