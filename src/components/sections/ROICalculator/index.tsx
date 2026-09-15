import Section from "@components/common/Section";
import { ROICalculatorProps } from "./types";
import ROIForm from "./ROIForm";
import SectionHeader from "@components/common/SectionHeader";
import Form from "@components/sections/Form";

function ROICalculator({
  heading,
  headingType,
  text,
  buttonText,
  buttonUrl,
  attributes,
  theme,
  leanMoreHeading,
  leanMoreContent,
  addForm,
  formHeading,
  formSubheading,
  portalId = '6711606',
  formId = '',
}: ROICalculatorProps) {
  return (
    <>
    <Section
      name="roi-calculator"
      attributes={attributes}
      theme={theme}
      width="full"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-7">
        <SectionHeader
          heading={heading}
          text={text}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
          align="center"
          headingType={headingType}
        />
      </div>
      <ROIForm
        leanMoreHeading={leanMoreHeading}
        leanMoreContent={leanMoreContent}
      />
    </Section>

    {addForm && (
      <Section
        name="roi-calculator-form"
        attributes={attributes}
        theme={theme}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 md:px-10 relative lg:-mt-15">
          <SectionHeader
            heading={formHeading}
            text={formSubheading}
            align="center"
            className="z-1 text-white pt-20"
          />
            <div className="mx-auto w-full bg-white py-8 px-4 md:px-8 rounded-lg z-1 lg:-mt-10">
              <Form
                portalId={portalId}
                formId={formId}
              />
            </div>
            <div className="mb-8 absolute inset-0 w-full h-[60%] bg-mosswood rounded-4xl"></div>
        </div>
      </Section>
    )}
    </>
  );
}

export default ROICalculator;
