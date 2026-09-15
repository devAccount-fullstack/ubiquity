"use client";

import { useState, useCallback, memo } from "react";
import { AccordionTabsProps } from "./types";
import Section from "@components/common/Section";
import Details from "@components/common/Details";
import SectionHeader from "@components/common/SectionHeader";
import Button from "@components/common/Button";
import { twMerge } from "tailwind-merge";

// Memoized TabContent to prevent unnecessary re-renders
const TabContent = memo(function TabContent({
  tab,
  isFirst,
  expandedIndexes,
  onToggle,
}: {
  tab: AccordionTabsProps['tabs'][0];
  isFirst: boolean;
  expandedIndexes: boolean[];
  onToggle: (itemIndex: number) => void;
}) {
  return (
    <div>
      <h3
        className={twMerge(
          "md:hidden mt-6 mb-2 text-lg font-semibold md:mt-5 md:text-2xl",
          isFirst && "mt-0",
        )}
      >
        {tab.tabHeading}
      </h3>
      {tab.accordionItems.map((item, itemIndex) => (
        <Details
          key={itemIndex}
          {...item}
          className="mb-2"
          expanded={!!expandedIndexes[itemIndex]}
          onToggle={() => onToggle(itemIndex)}
        />
      ))}
    </div>
  );
});

function AccordionTabs({
  heading,
  tabs,
  buttonText,
  buttonUrl,
  attributes,
  theme,
}: AccordionTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Track expanded state per tab
  const [expandedStates, setExpandedStates] = useState(() =>
    tabs.map(tab => Array(tab.accordionItems.length).fill(false))
  );

  // Memoized handlers to avoid unnecessary re-renders
  const handleTabChange = useCallback((index: number) => {
    setActiveTab(index);
    setExpandedStates(states =>
      states.map((arr, i) =>
        i === index ? arr : arr.map(() => false)
      )
    );
  }, []);

  const handleToggle = useCallback((tabIndex: number, itemIndex: number) => {
    setExpandedStates(states =>
      states.map((arr, i) =>
        i === tabIndex
          ? arr.map((val, j) => (j === itemIndex ? !val : val))
          : arr
      )
    );
  }, []);

  return (
    <Section
      name="accordion-tabs"
      attributes={attributes}
      theme={theme}
    >
      <SectionHeader heading={heading} />
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-10 md:col-start-2">
          {tabs.length > 1 && (
            <div className="justify-center gap-1 mb-15 hidden sm:flex">
              <div className="border border-dune rounded-md p-1">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.tabHeading}
                    className={twMerge(
                      "py-3 px-2 rounded transition-colors cursor-pointer transition-all",
                      activeTab === index
                        ? "bg-blaze text-obsidian hover:bg-blaze/90 font-semibold"
                        : "text-blaze"
                    )}
                    onClick={() => handleTabChange(index)}
                    type="button"
                    tabIndex={activeTab === index ? 0 : -1}
                  >
                    {tab.tabHeading}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="grid gap-2">
            <div className="sm:hidden">
              {tabs.map((tab, tabIndex) => (
                <TabContent
                  key={tab.tabHeading}
                  tab={tab}
                  isFirst={tabIndex === 0}
                  expandedIndexes={expandedStates[tabIndex]}
                  onToggle={itemIndex => handleToggle(tabIndex, itemIndex)}
                />
              ))}
            </div>
            <div className="hidden sm:block">
              <TabContent
                tab={tabs[activeTab]}
                isFirst={activeTab === 0}
                expandedIndexes={expandedStates[activeTab]}
                onToggle={itemIndex => handleToggle(activeTab, itemIndex)}
              />
            </div>
          </div>
          {buttonText && buttonUrl && (
            <div className="mt-10 flex justify-center">
              <Button variant="primary"
                asLink
                href={buttonUrl}
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default AccordionTabs;
