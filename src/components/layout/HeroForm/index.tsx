"use client";

import HubspotForm from "@components/sections/HubspotForm";
import Hero from "../Hero";
import type { HeroFormProps } from "./types";
import { twMerge } from "tailwind-merge";
import { updatedCategoryName } from "@utils/updatedCategoryName";
import { useContext } from "react";
import { BuilderStoreContext } from "@builder.io/react";

function HeroForm({
  portalId,
  formId,
  submitText,
  imageBelowContent,
  formPosition = "right",
  ...heroProps
}: HeroFormProps) {
  const hasForm = !!(portalId && formId);
  const builderState = useContext(BuilderStoreContext);
  
  return (
    <Hero
      {...heroProps}
      eyebrow={updatedCategoryName(builderState?.content?.data?.category)}
      imageBelowContent={hasForm ? imageBelowContent : undefined}
      image={hasForm ? undefined : imageBelowContent}
      mediaPosition={formPosition}
      mediaContent={hasForm && (
        <div className={twMerge(
          "text-obsidian relative z-1 h-full w-full rounded-4xl bg-white p-6 shadow-lg md:p-8",
          formPosition === "under" && "h-auto",
        )}>
          <HubspotForm
            portalId={portalId}
            formId={formId}
            cssClass="global-form"
            submitText={submitText}
          />
        </div>
      )}
    />
  );
}

export default HeroForm;
