"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./styles.css";

const HubspotForm = dynamic(() => import("react-hubspot-form"), { ssr: false });

interface FormProps {
  portalId: string;
  formId: string;
  downloadLink?: string;
  buttonText?: string;
  handleFormLoad?: () => void;
}

const Form = ({
  portalId = "6711606",
  formId,
  downloadLink,
  buttonText = "Submit",
  handleFormLoad,
}: FormProps) => {
  const [state, setState] = useState(1);

  const onFormSubmitted = async () => {
    // https://legacydocs.hubspot.com/docs/methods/forms/advanced_form_options
    if (downloadLink) {
      setTimeout(() => {
        window.open(downloadLink, "_ blank");
      }, 1000);
    }

    setTimeout(() => setState(state + 1), 20000);
  };

  return (
    <div className="custom-scroll h-full w-full">
      {formId && (
        <HubspotForm
          key={state}
          portalId={portalId}
          formId={formId}
          onFormSubmitted={onFormSubmitted}
          onFormReady={handleFormLoad}
          loading={
            <div className="grid min-h-60 place-items-center">
              <div className="h-20 w-20 animate-spin rounded-full border-8" />
            </div>
          }
          cssClass="global-form"
          submitText={buttonText}
        />
      )}
    </div>
  );
};
export default Form;
