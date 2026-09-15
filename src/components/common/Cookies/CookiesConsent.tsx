"use client";

import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useStore from "store";

import Button from "@components/common/Button";
import Toggle from "@components/common/Toggle";

import * as Dialog from "@radix-ui/react-dialog";

import type { CookieValueTypes } from "cookies-next";

const CookieConsent = () => {
  const showConsent = useStore((state) => state.showConsent);
  const setShowConsent = useStore((state) => state.setShowConsent);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStatisticsChecked, setIsStatisticsChecked] = useState(false);
  const [isMarketingChecked, setIsMarketingChecked] = useState(false);
  const [bannerInitialized, setBannerInitialized] = useState(false);

  useEffect(() => {
    const fetchCookies = async () => {
      const cmplzBannerStatus: CookieValueTypes = await getCookie(
        "cmplz_banner-status",
      );

      const cmplzStatistics = await getCookie("cmplz_statistics");
      const cmplzMarketing = await getCookie("cmplz_marketing");

      if (cmplzStatistics === "allow") {
        setIsStatisticsChecked(true);
      }

      if (cmplzMarketing === "allow") {
        setIsMarketingChecked(true);
      }

      if (cmplzBannerStatus !== undefined) {
        setShowConsent(cmplzBannerStatus === "dismissed" ? true : false);
      }
    };

    fetchCookies();
    setBannerInitialized(true);
  }, [setShowConsent]);

  const openPreference = () => {
    setIsModalOpen(true);
  };

  const expiration = { maxAge: 30 * 24 * 60 * 60 };

  const acceptCookie = async () => {
    setCookie("cmplz_consented_services", "", expiration);
    setCookie("cmplz_statistics", "allow", expiration);
    setCookie("cmplz_saved_services", {}, expiration);
    setCookie("cmplz_functional", "allow", expiration);
    setCookie(
      "cmplz_saved_categories",
      JSON.stringify(["marketing", "statistics", "preferences", "functional"]),
      expiration,
    );
    setCookie("cmplz_preferences", "allow", expiration);
    setCookie("cmplz_marketing", "allow", expiration);
    setCookie("cmplz_policy_id", "3", expiration);
    setCookie("cmplz_banner-status", "dismissed", expiration);
    setCookie("cmplz_id", "", expiration);
    setIsStatisticsChecked(true);
    setIsMarketingChecked(true);
  };

  const rejectCookie = async () => {
    setCookie("cmplz_consented_services", "", expiration);
    setCookie("cmplz_statistics", "deny", expiration);
    setCookie("`cmplz_saved_services", {}, expiration);
    setCookie("cmplz_functional", "allow", expiration);
    setCookie(
      "cmplz_saved_categories",
      JSON.stringify(["functional"]),
      expiration,
    );
    setCookie("cmplz_preferences", "deny", expiration);
    setCookie("cmplz_marketing", "deny", expiration);
    setCookie("cmplz_policy_id", "3", expiration);
    setCookie("cmplz_banner-status", "dismissed", expiration);
    setCookie("cmplz_id", "", expiration);
    setIsStatisticsChecked(false);
    setIsMarketingChecked(false);
  };

  const savePreference = async () => {
    const categories = ["functional"];
    if (isStatisticsChecked) {
      categories.push("statistics");
    }

    if (isMarketingChecked) {
      categories.push("marketing");
    }

    setCookie("cmplz_consented_services", "", expiration);
    setCookie(
      "cmplz_statistics",
      isStatisticsChecked ? "allow" : "deny",
      expiration,
    );
    setCookie("`cmplz_saved_services", {}, expiration);
    setCookie("cmplz_functional", "allow", expiration);
    setCookie("cmplz_saved_categories", JSON.stringify(categories), expiration);
    setCookie("cmplz_preferences", "deny", expiration);
    setCookie(
      "cmplz_marketing",
      isMarketingChecked ? "allow" : "deny",
      expiration,
    );
    setCookie("cmplz_policy_id", "3", expiration);
    setCookie("cmplz_banner-status", "dismissed", expiration);
    setCookie("cmplz_id", "", expiration);
  };

  if (showConsent || !bannerInitialized) {
    return null;
  }

  return (
    <div className="bg-gray-1100 fixed inset-x-0 bottom-0 z-50 m-2 flex items-center justify-between gap-1">
      {!isModalOpen && (
        <div className="bg-linen border-dune flex flex-col items-center justify-between gap-4 rounded-lg border px-4 py-3 shadow-lg md:flex-row md:gap-2 lg:m-4 lg:gap-4 lg:gap-10 lg:px-6">
          <p className="text-[12px]">
            To provide the best experiences, we use technologies like cookies to
            store and/or access device information. Consenting to these
            technologies will enable us to process data such as browsing
            behavior or unique IDs on this site. Not consenting or withdrawing
            consent may adversely affect certain features and functions.
          </p>
          <div className="flex w-full flex-col-reverse justify-end gap-2 sm:w-auto md:shrink-0 md:flex-row">
            <Button
              variant="link"
              onClick={openPreference}
              onKeyDown={(e: React.KeyboardEvent) =>
                e.key === "Enter" && openPreference()
              }
              className="mr-5 block"
            >
              View Preferences
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setShowConsent(true);
                rejectCookie();
              }}
            >
              Deny
            </Button>
            <Button
              onClick={() => {
                setShowConsent(true);
                acceptCookie();
              }}
            >
              Accept
            </Button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
            <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
              <Dialog.Content className="bg-linen w-full max-w-xl items-center justify-center">
                <div className="flex h-[65dvh] w-full flex-col px-4 py-5">
                  <div className="custom-scroll h-full grow overflow-y-auto">
                    <Dialog.Title className="pb-6 font-serif text-3xl font-bold">
                      Give permission or set your own choice
                    </Dialog.Title>
                    <p className="pb-2 text-sm">
                      Your consent applies to this media and you can change it
                      again through your privacy settings on our website. Read
                      more in our and{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-primary-500 text-blaze underline"
                      >
                        Privacy Policy
                      </Link>
                    </p>

                    <div className="flex flex-col gap-4 pt-6">
                      <div className="bg-white p-4">
                        <div className="flex justify-between pb-2">
                          <h4 className="text-overline-lg text-primary-600 font-semibold">
                            Functional
                          </h4>
                          <p className="text-sm">Always active</p>
                        </div>
                        <p className="text-sm">
                          The technical storage or access is strictly necessary
                          for the legitimate purpose of enabling the use of a
                          specific service explicitly requested by the
                          subscriber or user, or for the sole purpose of
                          carrying out the transmission of a communication over
                          an electronic communications network.
                        </p>
                      </div>

                      <div className="bg-white p-4">
                        <div className="flex justify-between pb-2">
                          <h4 className="text-overline-lg text-primary-600 font-semibold">
                            Statistics
                          </h4>
                          <Toggle
                            name="statistics"
                            isChecked={isStatisticsChecked}
                            setIsChecked={setIsStatisticsChecked}
                            color_mode="light"
                          />
                        </div>
                        <p className="text-sm">
                          The technical storage or access that is used
                          exclusively for statistical purposes.
                        </p>
                      </div>

                      <div className="bg-white p-4">
                        <div className="flex justify-between pb-2">
                          <h4 className="text-overline-lg text-primary-600 font-semibold">
                            Marketing
                          </h4>
                          <Toggle
                            name="marketing"
                            isChecked={isMarketingChecked}
                            setIsChecked={setIsMarketingChecked}
                            color_mode="light"
                          />
                        </div>
                        <p className="text-sm">
                          The technical storage or access is required to create
                          user profiles to send advertising, or to track the
                          user on a website or across several websites for
                          similar marketing purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col-reverse gap-2 px-4 py-5 pt-4 md:flex-row md:justify-between md:gap-4">
                  <Button
                    onClick={() => {
                      setIsModalOpen(false);
                      savePreference();
                      setShowConsent(true);
                    }}
                    onKeyDown={(e: React.KeyboardEvent) =>
                      e.key === "Enter" && savePreference()
                    }
                  >
                    Save Preferences
                  </Button>
                  <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setIsModalOpen(false);
                        rejectCookie();
                        setShowConsent(true);
                      }}
                    >
                      Deny
                    </Button>
                    <Button
                      onClick={() => {
                        setIsModalOpen(false);
                        acceptCookie();
                        setShowConsent(true);
                      }}
                    >
                      Accept
                    </Button>
                  </div>
                </div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};

export default CookieConsent;
