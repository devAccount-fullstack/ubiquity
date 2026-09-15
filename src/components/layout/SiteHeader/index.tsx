import { getBuilderDataModel } from "@/data/getBuilderDataModel";
import { HeaderData } from "./types";
import { getFirstBlock } from "@/data/getFirstBlock";
import SiteHeader from "./SiteHeader";
import { BannerProps } from "../AnnouncementBanner/types";

const lightThemeColourSlugs = ["obsidian", "mosswood", "claret", "tundra"];

async function SiteHeaderIndex({
  pagePath,
  theme: initialTheme = "dark",
  model = "page",
}: {
  pagePath?: string;
  theme?: string;
  model?: string;
}) {
  const { primaryMenu, secondaryMenu }: HeaderData =
    await getBuilderDataModel("site-header");

  const bannerData: BannerProps = await getBuilderDataModel("announcement-banner");

  const firstBlock = await getFirstBlock(pagePath || "/", model);
  let newTheme = initialTheme;

  let hideSiteHeaderMenu = false;  
  if (
    firstBlock?.component?.name &&
    firstBlock.component.name.includes("Hero")
  ) {
    if (firstBlock.component.name === "HeroHome") {
      newTheme = "light";
    }
    if (lightThemeColourSlugs.includes(firstBlock.component.options.theme)) {
      newTheme = "light";
    }
    if (firstBlock.component.options.mediaPosition === "full") {
      newTheme = "light";
    }
    // Hide menu when HeroForm is first   
    if (firstBlock.component.name === "Hero - Form") {
      hideSiteHeaderMenu = true;
    }
  }

  return (
    <SiteHeader
      theme={newTheme}
      primaryMenu={primaryMenu}
      secondaryMenu={secondaryMenu}
      bannerData={bannerData}
      hideSiteHeaderMenu={hideSiteHeaderMenu}
    />
  );
}

export default SiteHeaderIndex;
