import { BuilderBlockComponent } from "@builder.io/react";
import { ResourceContentProps } from "./types";
import Section from "@components/common/Section";
import RelatedResources from "@components/common/RelatedResources";
import { twMerge } from "tailwind-merge";

function ResourceContent({
  builderBlock,
  attributes,
  relatedResourcesLayout = "side",
}: ResourceContentProps) {
  const isBottom = relatedResourcesLayout === "bottom";

  return (
    <Section
      name="resource-content"
      attributes={attributes}
      theme="linen"
      className="lg:pt-0"
      containerClassName="grid ap-15 md:gap-6 md:grid-cols-12"
    >
      <div
        className={twMerge(
          "resource-content__content space-y-5",
          isBottom ? "md:col-span-12" : "md:col-span-7",
        )}
      >
        {builderBlock &&
          builderBlock.children &&
          builderBlock.children.map((block) => (
            <BuilderBlockComponent key={block.id} block={block} />
          ))}
      </div>
        <div className={isBottom ? "md:col-span-12 mt-10" :"md:col-span-4 lg:col-start-9"}>
          <RelatedResources layout={isBottom ? "bottom" : "side"} />
        </div>
    </Section>
  );
}

export default ResourceContent;
