"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import type { HubspotFormProps } from "./types";
import "./styles.css";

function HubspotForm({
  portalId,
  formId,
  submitText = "Sign Up",
  cssClass,
  className,
}: HubspotFormProps & { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  const [formCreated, setFormCreated] = useState(false);

  useEffect(() => {
    if (loaded && !formCreated) {
      try {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: `#hubspot-form-wrapper-${formId}`,
          submitText,
          cssClass,
        });
        setFormCreated(true);
      } catch (e) {
        console.warn("Failed to create hubspot form:");
        console.error(e);
        setFormCreated(false);
      }
    }
  }, [
    loaded,
    formCreated,
    setFormCreated,
    cssClass,
    formId,
    portalId,
    submitText,
  ]);

  return (
    <>
      <Script
        id="hubspotScript"
        src="https://js.hsforms.net/forms/v2.js"
        strategy="afterInteractive"
        onReady={() => setLoaded(true)}
      />
      <div
        id={`hubspot-form-wrapper-${formId}`}
        className={`hubspot-form ${className || ""} h-full w-full`}
      />
    </>
  );
}

export default HubspotForm;
