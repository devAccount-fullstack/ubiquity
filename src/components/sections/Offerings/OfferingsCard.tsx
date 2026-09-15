import Image from "next/image";

import type { OfferingsCardProps } from "./types";
import RichText from "@components/common/RichText";

function OfferingsCard({
  icon,
  heading,
  text,
  cardLinkText,
  cardLinkUrl,
}: OfferingsCardProps) {
  return (
    <div className="group relative">
      <div className="relative z-10 flex h-full flex-col justify-between py-6 p-8">
        <div className="mb-5">
          {icon && (
            <Image width={38} height={38} src={icon} alt={heading || "Icon"} />
          )}
        </div>
        {heading && (
          <h3 className="mb-3 pt-3 text-2xl font-semibold">{heading}</h3>
        )}
        {text && <RichText content={text} />}
        {cardLinkUrl && (
          <a
            href={cardLinkUrl}
            className="text-blaze inline-block pt-5 font-semibold group-hover:underline after:absolute after:inset-0 after:content-['']"
          >
            {cardLinkText}
          </a>
        )}
      </div>

      <div className="absolute top-0 left-0 h-full w-full rounded-2xl transition duration-300 ease-in-out group-hover:bg-mist group-hover:border-mist border border-dune"></div>
    </div>
  );
}

export default OfferingsCard;
