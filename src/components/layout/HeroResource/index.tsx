"use client";

import type { HeroResource } from "./types";

import { BuilderStoreContext } from "@builder.io/react";
import { useContext } from "react";
import Hero from "../Hero";
import { isRichText } from "@utils/isRichText";
import { updatedCategoryName } from "@utils/updatedCategoryName";

function HeroResource(props: HeroResource) {
  const { badge, heading, author, image, theme, attributes } = props;

  const builderState = useContext(BuilderStoreContext);

  const heroContent = {
    badge: isRichText(badge)
      ? badge
      : updatedCategoryName(builderState?.content?.data?.category),
    author: {
      name: author?.name || builderState?.content?.data?.author,
      image: author?.image,
    },
  };

  const layout = "right";
  const showLineSvg = true;
  const split = true;
  const splitColour = "linen";

  return (
    <Hero
      heading={heading}
      mediaPosition={layout}
      showLineSvg={showLineSvg}
      split_theme={split}
      split_theme_color={splitColour}
      attributes={attributes}
      theme={theme}
      image={image}
      eyebrow={heroContent.badge}
      author={heroContent.author}
    />
  );
}

export default HeroResource;
