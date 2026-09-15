import Block from "@components/common/Block";
import { CardBlockProps } from "./types";
import { twMerge } from "tailwind-merge";
import { BuilderBlockComponent } from "@builder.io/react";

function CardBlock({
  attributes,
  backgroundColor,
  builderBlock,
}: CardBlockProps) {
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
    <Block
      name="card-block"
      attributes={attributes}
      className={twMerge(
        "rounded-2xl p-8 md:p-13",
        bgColors[backgroundColor],
        textColor[backgroundColor],
      )}
    >
      {builderBlock &&
        builderBlock.children &&
        builderBlock.children.map((block) => (
          <BuilderBlockComponent key={block.id} block={block} />
        ))}
    </Block>
  );
}

export default CardBlock;
