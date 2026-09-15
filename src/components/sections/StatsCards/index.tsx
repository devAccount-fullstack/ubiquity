import type { StatsCardsProps } from "./types";
import ContentBlock from "@components/common/ContentBlock";
import RichText from "@components/common/RichText";
import Section from "@components/common/Section";
import { twMerge } from "tailwind-merge";

function StatsCards({
  heading,
  text,
  buttonText,
  buttonUrl,
  stats,
  theme,
  attributes,
}: StatsCardsProps) {
  return (
    <Section name="stats-cards" attributes={attributes} theme={theme}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:pt-15">
        <div className="mb-5 md:mb-0 md:col-span-6 lg:col-span-5">
          <ContentBlock
            heading={heading}
            text={text}
            buttonText={buttonText}
            buttonUrl={buttonUrl}
          />
        </div>
        <div className="md:col-span-6 lg:col-start-7">
          {stats && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-5 md:-mt-15">
                {stats.filter((_, i) => i % 2 === 0).map((stat, index) => (
                  <div
                    key={`left-${index}`}
                    className={twMerge("w-full")}
                  >
                    <div className="rounded-3xl bg-white p-8">
                      <h3 className="text-blaze font-serif text-4xl md:text-5xl">
                        {stat.stat}
                      </h3>
                      {stat.text && <RichText content={stat.text} />}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {stats.filter((_, i) => i % 2 === 1).map((stat, index) => (
                  <div
                    key={`right-${index}`}
                    className={twMerge("w-full", "md:mt-0")}
                  >
                    <div className="rounded-3xl bg-white p-8">
                      <h3 className="text-blaze font-serif text-4xl md:text-5xl">
                        {stat.stat}
                      </h3>
                      {stat.text && <RichText content={stat.text} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default StatsCards;
