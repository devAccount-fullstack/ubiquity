"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BannerProps } from "./types";
import CloseIcon from "@/assets/img/icon-close.svg";
import { getCookie, setCookie } from "cookies-next";
import { usePathname } from "next/navigation";

function AnnouncementBanner(props: BannerProps) {
  const cookie = getCookie('announcement-bar')
  const [isOpen, setIsOpen] = useState(false);
  const { content, link = {}, themeColor, pages } = props;
  const { text, url } = link

  const currentPage = usePathname();
  const hasCurrentPage = pages?.some(
    ({ page }) => page?.value?.data?.url === currentPage
  );

  let fontColor, backgroundColor, linkColor, closeColor = 'text-[#232122]';

  useEffect(() => {
    if (!cookie) setIsOpen(true);
  }, [cookie]);

  switch (themeColor) {
    case 'Claret':
      fontColor = 'text-white'
      backgroundColor = 'bg-claret'
      linkColor = 'text-blaze hover:text-blaze/80'
      closeColor = 'text-[#F9F0DC]'
    break;
    case 'Blaze':
      fontColor = 'text-[#232122CC]'
      backgroundColor = 'bg-blaze'
      linkColor = 'text-white hover:text-white/80'
    break;
    case 'Dune':
      fontColor = 'text-[#232122CC]'
      backgroundColor = 'bg-dune'
      linkColor = 'text-[#232122] hover:text-[#232122]/80'
    break;
    default:
      fontColor = 'text-[#232122CC]'
      backgroundColor = 'bg-[#EAF2E9]'
      linkColor = 'text-blaze hover:text-blaze/80'
    break;
  }

  if (!props) return null;

  return hasCurrentPage && isOpen && !cookie && (
    <div className={`${backgroundColor} w-full min-h-[50px] py-3.5 pl-6 pr-16 flex items-center justify-center`}>
      <CloseIcon
        className={`${closeColor} absolute top-[18px] right-[25px] size-3.5 cursor-pointer text-base sm:text-xs`}
        onClick={() => {
          setCookie('announcement-bar', true)
          setIsOpen(false)
        }}/>
      <div className="flex items-center justify-center gap-3 leading-5">
        <div className={`${fontColor}`} dangerouslySetInnerHTML={{ __html: content }} />
        {text && url && (
          <Link
            href={url}
            className={`${linkColor} font-bold underline underline-offset-2 -tracking-[0.02em]`}
            >
            {text}
          </Link>
        )}
      </div>
    </div>
  );
}

export default AnnouncementBanner;
