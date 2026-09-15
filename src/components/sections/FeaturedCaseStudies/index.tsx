import Section from "@components/common/Section";
import TestimonialCard from "@components/common/Cards/TestimonialCard";

import { FeaturedCaseStudiesProps } from "./types";
import CaseStudyLargeCard from "@components/common/Cards/CaseStudyLargeCard";
import SectionHeader from "@components/common/SectionHeader";
import Button from "@components/common/Button";

function FeaturedCaseStudies({
  heading,
  headingType,
  buttonText,
  buttonUrl,
  theme,
  attributes,
  featuredCaseStudy,
  testimonials = [],
}: FeaturedCaseStudiesProps) {
  return (
    <Section name="featured-case-studies" attributes={attributes} theme={theme}>
      <SectionHeader
        heading={heading}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        headingType={headingType}
        buttonHideMobile={true}
      />
      {featuredCaseStudy && (
        <CaseStudyLargeCard caseStudy={featuredCaseStudy} className="mb-9" />
      )}
      {testimonials.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      )}
      {buttonUrl && buttonText && (
        <Button
          variant="primary"
          href={buttonUrl}
          className="mt-6 md:hidden"
          asLink
        >
          {buttonText}
        </Button>
      )}
    </Section>
  );
}

export default FeaturedCaseStudies;
