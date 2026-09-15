import { BlockProps } from "@/global.types";
import { twMerge } from "tailwind-merge";

function Block(props: BlockProps) {
  const {
    children,
    name,
    attributes: {
      "builder-id": builderId,
      className: attributesClassName,
      key: attributesKey,
      style: attributesStyle,
      ...attributesRest
    },
    tag = "div",
    className,
    ...rest
  } = props;

  const Tag: React.ElementType = tag || "div";

  return (
    <Tag
      data-section={name}
      builder-id={builderId}
      key={attributesKey}
      className={twMerge(attributesClassName, name, "my-7 md:my-20", className)}
      style={attributesStyle}
      {...attributesRest}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Block;
