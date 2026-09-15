import Image from "next/image";
import type { HowWeDoItProps } from "./types";
import FeatureCard from "./FeatureCard";
import Section from "@components/common/Section";
import ContentBlock from "@components/common/ContentBlock";
import Grid from "@components/common/Grid";

function HowWeDoIt({
  heading,
  text,
  buttonText,
  buttonUrl,
  image,
  features,
  theme = "claret",
  attributes,
}: HowWeDoItProps) {
  const featureCount = features ? features.length : 0;

  return (
    <Section
      name="how-we-do-it"
      attributes={attributes}
      theme={theme}
      className="relative overflow-hidden"
    >
      <div className="grid grid-cols-6 gap-6 pb-10 md:grid-cols-12 md:pb-20">
        <div className="col-span-6 md:col-span-5">
          <ContentBlock
            heading={heading}
            text={text}
            buttonText={buttonText}
            buttonUrl={buttonUrl}
          />
        </div>
      </div>

      {features && features.length > 0 && (
        <Grid className="relative z-10" tablet={3} desktop={featureCount}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              heading={feature.heading}
              text={feature.text}
            />
          ))}
        </Grid>
      )}
      {image && (
        <div className="absolute top-0 right-0 z-0 h-full w-1/2 max-md:hidden">
          <Image
            src={image}
            alt="bg-image"
            className="object-cover max-md:w-6/12 max-sm:hidden"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </Section>
  );
}

export default HowWeDoIt;
