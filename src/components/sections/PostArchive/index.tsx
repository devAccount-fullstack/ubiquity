import Section from "@components/common/Section";
import ContentBlock from "@components/common/ContentBlock";
import { PostArchiveProps } from "./types";
import CaseStudyLargeCard from "@components/common/Cards/CaseStudyLargeCard";

function PostArchive({
  heading,
  featuredPost,
  attributes,
  theme,
}: PostArchiveProps) {
  return (
    <Section name="post-archive" attributes={attributes} theme={theme}>
      <ContentBlock heading={heading} />
      {featuredPost && featuredPost.link && (
        <CaseStudyLargeCard className="my-15" caseStudy={featuredPost} />
      )}
    </Section>
  );
}

export default PostArchive;
