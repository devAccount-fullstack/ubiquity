interface SubHeaderLinkProps {
  text: string;
  url: string;
}

interface HeaderLinkProps {
  header: string;
  url: string;
  submenuLinks: SubHeaderLinkProps[];
}

interface CreditsLinkProps {
  text: string;
  url?: string;
}

interface HubSpotFormProps {
  portalId: string;
  formId: string;
}

export interface FooterData {
  hubSpotForm: HubSpotFormProps;
  formButtonText?: string;
  footerSiteLink: HeaderLinkProps[];
  credits: string;
  creditsLink: CreditsLinkProps[];
}
