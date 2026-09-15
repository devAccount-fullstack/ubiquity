import { twMerge } from "tailwind-merge";
import { StatsProps } from "./types";
import Block from "@components/common/Block";
import RichText from "@components/common/RichText";

function Stats({
  attributes,
  statistic,
  label,
  layout = "horizontal",
  border = true,
}: StatsProps) {
  return (
    <Block name="stats" attributes={attributes} className="text-center">
      <div
        className={twMerge(
          "mx-auto inline-flex max-w-120 flex-col items-center",
          layout === "horizontal" ? "gap-4 md:flex-row" : "gap-2",
          border && "border-blaze rounded-xl border p-5",
        )}
      >
        <div className="text-blaze font-serif text-3xl lg:text-5xl">
          {statistic}
        </div>
        <RichText content={label} className="text-left" />
      </div>
    </Block>
  );
}

export default Stats;
