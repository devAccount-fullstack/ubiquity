import Section from "@components/common/Section";
import OfferingsCard from "./OfferingsCard";
import { OfferingsProps } from "./types";
import Grid from "@components/common/Grid";
import SectionHeader from "@components/common/SectionHeader";

function Offerings({
  heading,
  text,
  buttonText,
  buttonUrl,
  cards,
  theme,
  attributes,
}: OfferingsProps) {
  return (
    <Section name="offerings" attributes={attributes} theme={theme}>
      <SectionHeader
        heading={heading}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />
      {cards && (
        <Grid desktop={4} className="pb-4">
          {cards.map((card, index) => (
            <OfferingsCard
              key={index}
              icon={card.icon}
              heading={card.heading}
              text={card.text}
              cardLinkText={card.cardLinkText}
              cardLinkUrl={card.cardLinkUrl}
            />
          ))}
        </Grid>
      )}
    </Section>
  );
}

export default Offerings;
