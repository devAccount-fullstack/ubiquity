import type { StatsColumnsProps } from "./types";
import RichText from "@components/common/RichText";
import Section from "@components/common/Section";
import SectionHeader from "@components/common/SectionHeader";
import Grid from "@components/common/Grid";

function StatsColumns({
  heading,
  text,
  stats,
  attributes,
  theme,
}: StatsColumnsProps) {
  const statsLength = stats ? stats.length : 0;

  return (
    <Section name="stats-columns" attributes={attributes} theme={theme}>
      <SectionHeader heading={heading} text={text} align="center" />
      <Grid desktop={statsLength}>
        {stats &&
          stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-blaze mb-5 font-serif text-4xl md:text-5xl lg:text-7xl">
                {stat.stat}
              </h3>
              <RichText content={stat.text || ""} />
            </div>
          ))}
      </Grid>
    </Section>
  );
}

export default StatsColumns;
