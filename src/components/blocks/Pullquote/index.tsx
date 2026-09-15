import Block from "@components/common/Block";
import { twMerge } from "tailwind-merge";
import RichText from "@components/common/RichText";
import { PullquoteProps } from "./types";

function Pullquote({ attributes, text, backgroundColor }: PullquoteProps) {
  const bgColors = {
    blaze: "bg-blaze",
    obsidian: "bg-obsidian",
    mosswood: "bg-mosswood",
    dune: "bg-dune",
    linen: "bg-linen",
    mist: "bg-mist",
    claret: "bg-claret",
    tundra: "bg-tundra",
  };

  const textColor = {
    blaze: "text-obsidian",
    obsidian: "text-white",
    mosswood: "text-white",
    dune: "text-obsidian",
    linen: "text-obsidian",
    mist: "text-obsidian",
    claret: "text-white",
    tundra: "text-white",
  };

  return (
    <Block name="pullquote" attributes={attributes}>
      <RichText
        content={text}
        className={twMerge(
          "not-prose rounded-2xl p-8 md:p-12",
          "font-serif text-3xl md:text-5xl",
          bgColors[backgroundColor],
          textColor[backgroundColor],
        )}
      />
    </Block>
  );
}

export default Pullquote;
