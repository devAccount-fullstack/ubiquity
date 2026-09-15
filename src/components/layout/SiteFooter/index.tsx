import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/ubiquity-logo-white.svg?url";
import { getBuilderDataModel } from "@/data/getBuilderDataModel";
import { FooterData } from "./types";
import HubspotForm from "@components/sections/HubspotForm";

async function SiteFooter() {
  const {
    hubSpotForm,
    formButtonText,
    footerSiteLink,
    credits,
    creditsLink,
  }: FooterData = await getBuilderDataModel("site-footer");

  return (
    <footer className="bg-mosswood mt-auto text-white">
      <div className="mx-auto my-18 max-w-6xl px-7">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="flex flex-col justify-between md:col-span-3">
            <Link href="/">
              <Image src={logo} alt="Ubiquity" />
            </Link>
            {hubSpotForm && (
              <div className="mt-4">
                <HubspotForm
                  portalId={hubSpotForm.portalId}
                  formId={hubSpotForm.formId}
                  submitText={formButtonText}
                  className="hubspot-form--newsletter"
                />
              </div>
            )}
          </div>
          {footerSiteLink && (
            <nav className="md:col-span-8 md:col-start-5">
              <ul className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {footerSiteLink.map((headerLink) => (
                  <li key={headerLink.header}>
                    <a
                      href={headerLink.url || "#"}
                      className="text-dune mb-5 inline-block font-bold"
                    >
                      {headerLink.header}
                    </a>
                    <ul className="space-y-2">
                      {headerLink.submenuLinks.map((subHeaderLink) => (
                        <li
                          key={subHeaderLink.text}
                          className="leading-5 mb-5"
                        >
                          <Link
                            href={subHeaderLink.url}
                            className="hover:text-dune hover:opacity-70 transition-all duration-200"
                          >
                            {subHeaderLink.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
      <div className="text-dune mx-auto my-9 max-w-6xl space-x-1 px-7 text-center text-sm">
        {credits.replace("{% year %}", new Date().getFullYear().toString())}
        {creditsLink.map((link) =>
          link.url ? (
            <Link
              key={link.text} href={link.url}
              className="hover:text-linen hover:opacity-70 transition-all duration-200"
            >
              | {link.text}
            </Link>
          ) : (
            <button key={link.text}>| {link.text}</button>
          ),
        )}
      </div>
    </footer>
  );
}

export default SiteFooter;
