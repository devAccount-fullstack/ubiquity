"use client";

import { useState } from "react";
import Link from "next/link";
import LogoFill from "@/assets/img/ubiquity-logo-fill.svg";
import { HeaderData } from "./types";
import SiteHeaderSearchInput from "./SiteHeaderSearchInput";
import Button from "@components/common/Button";
import SiteHeaderMenu from "./SiteHeaderMenu";
import SiteHeaderScroll from "./SiteHeaderScroll";
import { twMerge } from "tailwind-merge";
import SiteHeaderMenuItem from "./SiteHeaderMenuItem";

import { BannerProps } from "../AnnouncementBanner/types";
import AnnouncementBanner from "../AnnouncementBanner";

function SiteHeader({
  theme: initialTheme = "dark",
  primaryMenu,
  secondaryMenu,
  bannerData,
  hideSiteHeaderMenu = false
}: {
  theme?: string;
  primaryMenu: HeaderData["primaryMenu"];
  secondaryMenu: HeaderData["secondaryMenu"];
  bannerData?: BannerProps;
  hideSiteHeaderMenu?: boolean;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SiteHeaderScroll theme={initialTheme}>
      {bannerData && <AnnouncementBanner {...bannerData} />}
      <div className={twMerge(
        "group-[.is-at-top.is-theme-dark]/siteheader:xl:text-obsidian mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 text-white transition-colors delay-400 duration-300 xl:w-full xl:flex-nowrap xl:py-6",
        hideSiteHeaderMenu && "min-h-[108px]",
      )}>
        <Link
          href="/"
          className="w-32 pl-7 xl:w-auto xl:pl-12"
          aria-label="Ubiquity"
        >
          <LogoFill className="h-auto w-full" />
        </Link>
        {!hideSiteHeaderMenu && (
        <SiteHeaderMenu isActive={isActive} setIsActive={setIsActive}>
          <div className="flex grow flex-col justify-between gap-6 border-t border-white/40 xl:flex-row xl:items-center xl:border-0">
            {primaryMenu && (
              <nav className="mt-6 xl:mx-auto xl:mt-0">
                <ul className="flex flex-col xl:flex-row">
                  {primaryMenu.map((link) => (
                    <SiteHeaderMenuItem
                      key={link.text}
                      link={link}
                      setIsActive={setIsActive}
                    />
                  ))}
                </ul>
              </nav>
            )}
            {secondaryMenu && (
              <nav>
                <ul className="flex flex-col gap-5 px-7 xl:flex-row xl:pl-0">
                  <li className="order-last xl:order-first">
                    <SiteHeaderSearchInput />
                  </li>
                  {secondaryMenu.map((link) => (
                    <li key={link.text} className="shrink-0">
                      <Button
                        href={link.url}
                        variant={link.buttonVariant}
                        asLink
                        className={twMerge(
                          link.buttonVariant === "secondary" &&
                            "group-[.is-at-top.is-theme-dark]/siteheader:xl:text-obsidian text-white",
                          "w-full transition-colors delay-400 duration-300 hover:delay-0",
                        )}
                      >
                        {link.text}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </SiteHeaderMenu>
        )}
      </div>
    </SiteHeaderScroll>
  );
}

export default SiteHeader;
