import Section from "@components/common/Section";
import { TemplateProps } from "./types";
import SectionHeader from "@components/common/SectionHeader";

function Template({
  heading,
  text,
  buttonText,
  buttonUrl,
  attributes,
  theme,
}: TemplateProps) {
  return (
    <Section name="template" attributes={attributes} theme={theme}>
      <SectionHeader
        heading={heading}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />
    </Section>
  );
}

export default Template;
