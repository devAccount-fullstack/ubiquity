"use client";

import React from "react";
import { Props } from "./types";
import Section from "@components/common/Section";
import Button from "@components/common/Button";

const Richtext = ({
  headingId,
  heading,
  headingSize,
  body,
  citeThisSection,
  copyButton = { showCopyButton: false, copyButtonLabel: "" },
  theme = "linen",
  attributes,
}: Props) => {

  const { showCopyButton, copyButtonLabel } = copyButton;

  const handleCopyBlock = () => {
    // Create a temporary element to extract text from HTML safely
    const tempDiv = document.createElement("div");

    tempDiv.innerHTML = (heading || "")  as string;
    const headingText = tempDiv.textContent?.trim() || "";

    tempDiv.innerHTML = (body || "")  as string;
    const bodyText = tempDiv.textContent?.trim() || "";

    const fullText = `${headingText}\n\n${bodyText}`;

    navigator.clipboard.writeText(fullText)
      .then(() => {
        console.log("Copied to clipboard:", fullText);
      })
      .catch(err => {
        console.error("Failed to copy text:", err);
      });
  };

  return (
    <Section
      name="richtext"
      attributes={attributes}
      theme={theme}
      className="!py-8"
    >
      {heading && (
        <div id={headingId} className="flex items-end gap-2 mb-8 relative group">
          <div
            className={headingSize}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          {citeThisSection && (
            <Button
              variant="link"
              asLink
              onClick={() => {
                const url = `${window.location.origin}${window.location.pathname}#${headingId}`;
                navigator.clipboard.writeText(url);
              }}
              className={`${headingSize} invisible group-hover:visible hover:no-underline font-normal`}
              title={citeThisSection}
            >
              #
            </Button>
          )}
        </div>
      )}

      {body && (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      )}

      {showCopyButton && (
        <Button
          variant="link"
          onClick={handleCopyBlock}
          className="mt-4 text-sm"
        >
          {copyButtonLabel || "Copy block"}
        </Button>
      )}
    </Section>
  );
};

export default Richtext;
