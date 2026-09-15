import Section from "@components/common/Section";
import OverviewColumn from "./Column";

import { OverviewProps } from "./types";
import Grid from "@components/common/Grid";
import SectionHeader from "@components/common/SectionHeader";

function Overview({
  heading,
  text,
  buttonText,
  buttonUrl,
  columns,
  iconOpacity,
  theme,
  attributes,
}: OverviewProps) {
  return (
    <Section name="overview" attributes={attributes} theme={theme}>
      <SectionHeader
        heading={heading}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
      />
      {columns && (
        <Grid className="border-t border-gray-200 pt-10 lg:pt-20">
          {columns.map((column, index) => (
            <OverviewColumn
              key={index}
              heading={column.heading}
              text={column.text}
              iconOpacity={iconOpacity}
            />
          ))}
        </Grid>
      )}
    </Section>
  );
}

export default Overview;
