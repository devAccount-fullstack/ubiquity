import { twMerge } from "tailwind-merge";
import { GridProps } from "./types";
import { Children } from "react";

function Grid({
  children,
  mobile,
  tablet,
  desktop,
  className,
  tag = "div",
  ...rest
}: GridProps) {
  const Tag: React.ElementType = tag;

  const childrenCount = Children.toArray(children).filter(
    (child) =>
      child !== null &&
      child !== undefined &&
      !(typeof child === "string" && child.trim() === ""),
  ).length;

  const mobileGridClasses = [
    "grid-cols-0",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
  ];

  const tabletGridClasses = [
    "md:grid-cols-0",
    "md:grid-cols-1",
    "md:grid-cols-2",
    "md:grid-cols-3",
    "md:grid-cols-4",
    "md:grid-cols-5",
    "md:grid-cols-6",
  ];
  const desktopGridClasses = [
    "lg:grid-cols-0",
    "lg:grid-cols-1",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "lg:grid-cols-5",
    "lg:grid-cols-6",
  ];
  return (
    <Tag
      className={twMerge(
        "grid gap-6",
        mobile ? mobileGridClasses[mobile] : "grid-cols-1",
        tablet ? tabletGridClasses[tablet] : "md:grid-cols-2",
        desktop
          ? desktopGridClasses[desktop]
          : childrenCount === 2 || childrenCount === 4
            ? "lg:grid-cols-2"
            : "lg:grid-cols-3",
        className,
        "relative z-1"
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Grid;
