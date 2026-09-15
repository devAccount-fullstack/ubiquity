import Section from "@components/common/Section";
import { RelatedArticlesProps } from "./types";
import SectionHeader from "@components/common/SectionHeader";
import Grid from "@components/common/Grid";
import Button from "@components/common/Button";
import ArticleCard from "@components/common/Cards/ArticleCard";

function RelatedArticles({
  heading,
  text,
  buttonText,
  buttonUrl,
  attributes,
  theme,
  relatedArticles,
}: RelatedArticlesProps) {
  return (
    <Section name="related-articles" attributes={attributes} theme={theme}>
      <SectionHeader
        heading={heading}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        buttonHideMobile={true}
      />
      <Grid>
        {relatedArticles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </Grid>

      {buttonUrl && buttonText && (
        <Button
          variant="primary"
          asLink
          href={buttonUrl}
          className="mt-6 md:hidden"
        >
          {buttonText}
        </Button>
      )}
    </Section>
  );
}

export default RelatedArticles;
