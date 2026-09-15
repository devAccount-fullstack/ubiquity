import Icon from "@components/common/Icon";
import RichText from "@components/common/RichText";
import Section from "@components/common/Section";
import { twMerge } from "tailwind-merge";
import { QuoteProps } from "./types";

function Quote({
  quoteText,
  removeTopPadding = false,
  removeBottomPadding = false,
  theme = "linen",
  attributes,
}: QuoteProps) {
  if (!quoteText) return null;

  return (
    <Section
      name="quote"
      attributes={attributes}
      theme={theme}
      className={twMerge(
        removeTopPadding && "pt-0 lg:pt-0",
        removeBottomPadding && "pb-0 lg:pb-0",
      )}
      containerClassName="max-w-5xl px-0"
    >
      <div className="flex">
        <div className="w-10 shrink-0">
          <Icon icon="quote-small" size={24} className="fill-blaze" />
        </div>
        <blockquote className="flex gap-4">
          <div className="font-serif text-2xl leading-tight md:text-3xl">
            <RichText content={quoteText} noWrapper />
          </div>
        </blockquote>
        <div className="w-10 shrink-0 justify-items-end">
          <Icon
            icon="quote-small"
            size={24}
            className="mt-auto shrink-0 -scale-x-100 fill-blaze"
          />
        </div>

      </div>
    </Section>
  );
}

export default Quote;
