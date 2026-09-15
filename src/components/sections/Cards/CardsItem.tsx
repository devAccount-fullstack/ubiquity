import Image from "next/image";
import RichText from "@components/common/RichText";
import Link from "next/link";

import type { CardsItemProps } from "./types";
import Card from "@components/common/Cards/Card";
import { twMerge } from "tailwind-merge";

function CardsItem({
  image,
  heading,
  text,
  cardLinkText,
  cardLinkUrl,
  card_style,
  remove_card_background,
  buttonBottomAlign,
  count,
}: CardsItemProps) {
  return (
    <Card
      tag="li"
      large={card_style !== "image"}
      className={twMerge(
        cardLinkUrl ? "transition-colors bg-white md:hover:bg-mist" : "bg-white",
        remove_card_background && "bg-transparent md:hover:bg-mist border-dune border",
        card_style === "image" && "gap-8",
      )}
    >
      {image && card_style !== "count" && (
      <div className={card_style === "image" ? "-mx-8 -mt-8" : undefined}>
        <Image
          width={card_style === "icon" ? 38 : 700}
          height={card_style === "icon" ? 38 : 440}
          src={image}
          alt={heading || (card_style === "icon" ? "Icon" : "Image")}
          className={twMerge(
            card_style === "image" && "h-auto w-full object-cover aspect-47/30",
            card_style === "icon" && "w-auto h-[38px]"
          )}
        />
      </div>
      )}
      <div className={twMerge("card-inner -mt-5 pt-5", buttonBottomAlign && "flex flex-col h-full")}>
      {card_style === "count" && count !== undefined && (
        <div className="text-blaze mb-5 font-serif text-4xl md:text-5xl lg:text-7xl">
        {count < 10 ? `0${count}` : count}
        </div>
      )}
      {heading && <h3 className="mb-2 text-xl md:text-2xl font-semibold">{heading}</h3>}
      {text && <RichText content={text || ""} />}
      {cardLinkUrl && (
        <Link
          href={cardLinkUrl}
          className={twMerge("text-blaze inline-block pt-8 font-semibold group-hover:underline after:absolute after:inset-0 after:content-['']", buttonBottomAlign && "mt-auto")}
        >
        {cardLinkText}
        </Link>
      )}
      </div>
    </Card>
  );
}

export default CardsItem;
