import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: "Two Column Table",
  inputs: [
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
    {
      name: "heading",
      type: "string",
    },
    {
      name: "rows",
      type: "list",
      subFields: [
        { name: "label", type: "string", friendlyName: "Row Label" },
        { name: "right", type: "string", friendlyName: "Right Column" },
      ],
      defaultValue: [
        {
          label: "Unified Data Spine",
          right: "One secure lake for transcripts, CRM, QA, WFM, and outcomes; open connectors.",
        },
        {
          label: "Real-time Event Stream",
          right: "Turns conversations into structured signals; triggers next-best-action and alerts.",
        },
      ],
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
