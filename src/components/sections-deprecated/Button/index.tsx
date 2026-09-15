import Block from "@components/common/Block";
import { BuilderBlockAttributes } from "@/global.types";
import { IconIds } from "@components/common/Icon";
import Button from "@components/common/Button";

interface DeprecatedButtonProps extends BuilderBlockAttributes {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  text?: string;
  hierarchy?:
    | "black"
    | "orange"
    | "white"
    | "yellow"
    | "green"
    | "linkWhite"
    | "linkBlack";
  background?:
    | "black"
    | "orange"
    | "white"
    | "yellow"
    | "green"
    | "linkWhite"
    | "linkBlack";
  width?: "fit" | "full";
  border?: boolean;
  startIcon?: IconIds | "";
  styles?: string;
  endIcon?: IconIds | "";
  iconSize?: number;
  href?: string;
  external?: boolean;
  builderBlock?: unknown; // adjust the type if known
  builderState?: unknown; // adjust the type if known
}

const DeprecatedButton = ({
  attributes,
  text = "call to action",
  href = "",
  styles,
  external,
}: DeprecatedButtonProps) => {
  const cleanedClassName = attributes.className
    ? attributes.className.replace(/\s*css-[^\s]+/g, "")
    : "";

  const cleanAttributes = {
    ...attributes,
    className: cleanedClassName,
  };

  return (
    <Block
      name="deprecated-button"
      attributes={cleanAttributes}
      className="my-5 md:my-5"
    >
      <Button
        external={external}
        href={href}
        asLink={!!href}
        className={styles}
      >
        {text}
      </Button>
    </Block>
  );
};
export default DeprecatedButton;
