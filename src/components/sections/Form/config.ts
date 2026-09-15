import type { Component as ConfigOptions } from "@builder.io/sdk";
import Component from ".";

const config = {
  name: 'Form',
  inputs: [
    {
      name: 'portalId',
      type: 'string',
    },
    {
      name: 'formId',
      type: 'string',
    },
    {
      name: 'Heading',
      type: 'string',
    },
    {
      name: 'Text',
      type: 'RichText',
    },
    {
      name: 'downloadLink',
      type: 'string',
      friendlyName: 'Download Link',
      helperText: '(Optional) Add a downloadable link path.',
    },
  ],
} as ConfigOptions;

const block = {
  component: Component,
  config: config,
};

export default block;
