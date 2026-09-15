import Block from "@components/common/Block";
import { BuilderBlockAttributes } from "@/global.types";
import { twMerge } from "tailwind-merge";
import RichText from "@components/common/RichText";

interface DeprecatedStatisticsProps extends BuilderBlockAttributes {
  heading?: string;
  stats?: {
    percent?: string;
    content?: string;
  }[];
}

const DeprecatedStatistics = ({
  attributes,
  heading,
  stats,
}: DeprecatedStatisticsProps) => {
  const cleanedClassName = attributes.className
    ? attributes.className.replace(/\s*css-[^\s]+/g, "")
    : "";

  const cleanAttributes = {
    ...attributes,
    className: cleanedClassName,
  };

  return (
    <Block
      name="deprecated-statistics"
      attributes={cleanAttributes}
      className="text-center"
    >
      {heading && (
        <p className="mb-5 text-lg font-semibold md:text-2xl">{heading}</p>
      )}
      <div className="space-y-6">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className={twMerge(
              "border-blaze mx-auto inline-flex max-w-120 flex-col items-center gap-2 rounded-xl border p-5",
            )}
          >
            <div className="text-blaze font-serif text-3xl lg:text-5xl">
              {stat.percent}
            </div>
            <RichText content={stat.content} className="text-left" />
          </div>
        ))}
      </div>
    </Block>
  );
};
export default DeprecatedStatistics;
