"use client";
import blocks from "@components/blocks";
import { builder, Builder } from "@builder.io/react";
import layout from "@components/layout";
import sections from "@components/sections";
import sectionsDeprecated from "@components/sections-deprecated";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const customComponents = [
  ...Object.values(sectionsDeprecated),
  ...Object.values(layout),
  ...Object.values(sections),
  ...Object.values(blocks),
];
customComponents.forEach((block) => {
  try {
    Builder.registerComponent(block.component, {
      defaultStyles: {
        // @ts-expect-error override the default marginTop in Builder.io
        marginTop: false,
      },
      noWrap: true,
      ...block.config,
    });
  } catch (error) {
    console.error("Error registering Counter component:", error);
  }
});
Builder.register("insertMenu", {
  name: "Hero Components",
  items: [
    {
      name: "Hero",
    },
    {
      name: "HeroHome",
    },
  ],
});
Builder.register("insertMenu", {
  name: "Sections",
  items: Object.values(sections)
    .map((section) => ({
      name: section.config.name,
    }))
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    }),
});
Builder.register("insertMenu", {
  name: "Blocks",
  items: Object.values(blocks)
    .map((block) => ({
      name: block.config.name,
    }))
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    }),
});
Builder.register("insertMenu", {
  name: "Page Layout",
  items: [
    {
      name: "Hero - Resource",
    },
    {
      name: "Hero - Form",
    },
    {
      name: "Content - Resource",
    },
  ],
});
