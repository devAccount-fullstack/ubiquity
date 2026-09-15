import Block from "@components/common/Block";
import { BuilderBlockAttributes } from "@/global.types";
import RichText from "@components/common/RichText";
import Link from "next/link";

interface ConversionPanelProps extends BuilderBlockAttributes {
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
  type?: "CTA Conversion Panel" | "Form Conversion Panel";
  headingAs?: "h2" | "h3" | "h4" | "h5" | "h6";
  alignment?: "center" | "left" | "right";
  heading?: string;
  description?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  buttonText?: string;
  buttonUrl?: string;
  isModalForm?: boolean;
  modalHeading?: string;
  modalDescription?: string;
  portalId?: string;
  formId?: string;
}

const ConversionPanel = ({
  attributes,
  heading,
  description,
  buttonUrl,
  buttonText,
}: ConversionPanelProps) => {
  const cleanedClassName = attributes.className
    ? attributes.className.replace(/\s*css-[^\s]+/g, "")
    : "";

  const cleanAttributes = {
    ...attributes,
    className: cleanedClassName,
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Block
        name="conversion-panel"
        attributes={cleanAttributes}
        className="bg-claret rounded-2xl p-8 text-white"
      >
        {heading && <h3>{heading}</h3>}
        {description && <RichText content={description} />}
        {buttonUrl && (
          <Link
            href={buttonUrl}
            className="bg-blaze text-obsidian border-blaze hover:bg-blaze/80 mt-4 inline-flex h-11 min-w-26 cursor-pointer items-center justify-center gap-1 rounded-md border px-4 py-2 text-sm font-semibold"
          >
            {buttonText || "Learn More"}
          </Link>
        )}
      </Block>
    </div>
  );
};
export default ConversionPanel;
