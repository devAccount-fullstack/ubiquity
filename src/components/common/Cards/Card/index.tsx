import { twMerge } from "tailwind-merge";

function Card({
  className,
  large = false,
  tag = "div",
  children,
  ...rest
}: {
  className?: string;
  large?: boolean;
  tag?: React.ElementType;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const Tag: React.ElementType = tag;

  return (
    <Tag
      className={twMerge(
        "card group text-obsidian relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-white",
        large ? "p-8 md:p-13" : "p-8",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
export default Card;
