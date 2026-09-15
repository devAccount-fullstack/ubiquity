import Section from "@components/common/Section";
import CardsItem from "./CardsItem";
import { CardsProps } from "./types";
import SectionHeader from "@components/common/SectionHeader";
import Grid from "@components/common/Grid";

function Cards({
  heading,
  text,
  buttonText,
  buttonUrl,
  alignHeading,
  card_style,
  remove_card_background,
  buttonBottomAlign,
  cards,
  attributes,
  theme,
  split_theme,
  split_theme_color,
}: CardsProps) {
  const incrementNumber = (index: number) => {
    return index + 1;
  };
  return (
    <Section
      name="cards"
      attributes={attributes}
      theme={theme}
      splitThemeOn={split_theme}
      splitThemeClass=".card:last-child .card-inner"
      splitThemeColor={split_theme_color}
      splitThemeMiddle={card_style === "image" ? false : true}
    >
      <SectionHeader
        heading={heading}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        wideTitle
        align={alignHeading}
      />
      {cards && (
        <Grid
          tag="ul"
        >
          {cards.map((card, index) => (
            <CardsItem
              key={index}
              image={card.image}
              heading={card.heading}
              text={card.text}
              cardLinkText={card.cardLinkText}
              cardLinkUrl={card.cardLinkUrl}
              card_style={card_style}
              remove_card_background={remove_card_background}
              buttonBottomAlign={buttonBottomAlign}
              count={incrementNumber(index)}
            />
          ))}
        </Grid>
      )}
    </Section>
  );
}

export default Cards;
