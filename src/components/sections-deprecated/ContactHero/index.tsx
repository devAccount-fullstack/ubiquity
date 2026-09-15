import { BlockProps } from "@/global.types";
import Block from "@components/common/Block";
import Icon, { IconIds } from "@components/common/Icon";
import RichText from "@components/common/RichText";
import Form from "@components/sections/Form";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface bulletProps {
  text: string;
}

type itemObject = { text: string; href?: string };

interface FormProps {
  formHeading?: string;
  formDescription?: string;
  portalId: string;
  formId: string;
  downloadLink?: string;
  button?: string;
  border?: boolean;
}

interface ImageProps {
  src: string;
}

interface DeprecatedContactHeroProps extends BlockProps {
  breadcrumbs?: boolean;
  useCustomBreadcrumbs?: boolean;
  customBreadcrumbs?: itemObject[];
  image?: ImageProps;
  theme?: "orange" | "yellow" | "green" | "black" | "white";
  noBlockMarginTop?: boolean;
  noBlockMarginBottom?: boolean;
  heading: string;
  description: string;
  quoteText?: string;
  formHeading?: string;
  formDescription?: string;
  icon: IconIds;
  bullets: bulletProps[];
  portalId: string;
  formId: string;
  form: FormProps;
}

function DeprecatedContactHero({
  image,
  noBlockMarginTop,
  noBlockMarginBottom,
  heading,
  description,
  icon,
  quoteText,
  bullets,
  form,
  attributes,
}: DeprecatedContactHeroProps) {
  return (
    <Block
      name="DeprecatedContactHero"
      tag="div"
      attributes={attributes}
      className={twMerge(
        noBlockMarginTop && "!mt-0 !md:mt-0",
        noBlockMarginBottom && "!mb-0 !md:mb-0",
      )}
    >
      {heading && (
        <div className="mb-7 font-serif text-5xl md:text-6xl lg:text-7xl">
          <RichText content={heading} noWrapper />
        </div>
      )}
      {description && <RichText content={description} />}
      {bullets && (
        <div className="my-6 space-y-4">
          {bullets.map(({ text }, index) => (
            <div key={index} className="flex">
              <div className="w-10 shrink-0">
                <Icon
                  icon={icon}
                  size={24}
                  className={twMerge("fill-blaze stroke-white")}
                />
              </div>
              <p className="first-of-type:mt-0 [&>strong]:block">
                <RichText content={text} noWrapper />
              </p>
            </div>
          ))}
        </div>
      )}
      {quoteText && (
        <div className="my-6 flex">
          <div className="w-10 shrink-0">
            <Icon icon="quote-small" size={24} className="fill-blaze" />
          </div>
          <div className="flex gap-4">
            <div className="font-serif text-2xl leading-tight md:text-3xl">
              <RichText content={quoteText} noWrapper />
            </div>
          </div>
          <div className="w-10 shrink-0 justify-items-end">
            <Icon
              icon="quote-small"
              size={24}
              className="mt-auto shrink-0 -scale-x-100 fill-blaze"
            />
          </div>

        </div>
      )}
      {image && image?.src && (
        <Image src={image.src} alt={heading || "Contact Image"} width={1000} height={1000} />
      )}
      {form && (
        <div>
          {form?.formHeading && (
            <div className="mb-7 text-lg font-semibold md:text-2xl">
              {form.formHeading}
            </div>
          )}
          {form?.formDescription && (
            <p className="mb-7">{form.formDescription}</p>
          )}
          <Form
            portalId={form.portalId}
            formId={form.formId}
            downloadLink={form.downloadLink}
            buttonText={form.button || "Submit"}
          />
        </div>
      )}
    </Block>
  );
}
export default DeprecatedContactHero;
