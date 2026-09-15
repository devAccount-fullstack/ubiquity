import Block from "@components/common/Block";
import { TemplateProps } from "./types";

function Template({ attributes }: TemplateProps) {
  return (
    <Block name="Template" attributes={attributes}>
      Template
    </Block>
  );
}

export default Template;
