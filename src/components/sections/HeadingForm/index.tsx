"use client";

import React from "react";
import { Props } from "./types";
import Section from "@components/common/Section";
import SectionHeader from "@components/common/SectionHeader";
import Form from "@components/sections/Form";

const HeadingForm = ({
  heading,
  body,
  button = {},
  portalId,
  formId,
  formButtonText = "Sign Up",
  sectionId,
  theme = "linen",
  attributes,
}: Props) => {

  const { text: buttonText = "", url: buttonUrl = "" } = button;

  return (
    <Section
      id={sectionId}
      name="heading-form"
      attributes={attributes}
      theme={theme}>

      <SectionHeader
        heading={heading}
        text={body}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />

      <div className="mx-auto w-full bg-white py-8 px-4 md:px-8 rounded-lg z-1">
        <Form
          portalId={portalId}
          formId={formId}
          buttonText={formButtonText}
        />
      </div>
    </Section>
  );
}


export default HeadingForm;
