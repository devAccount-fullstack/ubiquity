import PlainText from "./PlainText";
import { plainTextConfig } from "./PlainText/plainText.builderConfig";
import GuideHero from "./GuideHero";
import { guideHeroConfig } from "./GuideHero/guideHero.builderConfig";
import ConversionPanel from "./ConversionPanel";
import { conversionPanelConfig } from "./ConversionPanel/conversionpanel.builderConfig";
import Button from "./Button";
import { buttonConfig } from "./Button/button.builderConfig";
import Statistics from "./Statistics";
import { statisticsConfig } from "./Statistics/statistics.builderConfig";
import DeprecatedSidebarList from "./SidebarList";
import { sidebarListConfig } from "./SidebarList/sidebarList.builderConfig";
import DeprecatedNavigationCardComponent from "./NavigationCardComponent";
import { navigationCardComponent } from "./NavigationCardComponent/navigationCardComponent.builderConfig";
import DeprecatedContactHero from "./ContactHero";
import { contactHeroConfig } from "./ContactHero/contactHero.builderConfig";

const PlainTextWithConfig = {
  component: PlainText,
  config: plainTextConfig,
};

const GuideHeroWithConfig = {
  component: GuideHero,
  config: guideHeroConfig,
};

const ConversionPanelWithConfig = {
  component: ConversionPanel,
  config: conversionPanelConfig,
};

const ButtonWithConfig = {
  component: Button,
  config: buttonConfig,
};

const StatisticsWithConfig = {
  component: Statistics,
  config: statisticsConfig,
};

const SidebarListWithConfig = {
  component: DeprecatedSidebarList,
  config: sidebarListConfig,
};

const NavigationCardComponentWithConfig = {
  component: DeprecatedNavigationCardComponent,
  config: navigationCardComponent,
};

const ContactHeroWithConfig = {
  component: DeprecatedContactHero,
  config: contactHeroConfig,
};

const sectionsDeprecated = {
  PlainTextWithConfig,
  GuideHeroWithConfig,
  ConversionPanelWithConfig,
  ButtonWithConfig,
  StatisticsWithConfig,
  SidebarListWithConfig,
  NavigationCardComponentWithConfig,
  ContactHeroWithConfig,
};

export default sectionsDeprecated;
