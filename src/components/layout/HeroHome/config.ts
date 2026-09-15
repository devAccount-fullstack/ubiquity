import Component from ".";

const config = {
  name: "HeroHome",
  inputs: [
    {
      name: "heading",
      type: "richText",
    },
    {
      name: "text",
      type: "richText",
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "buttonUrl",
      type: "string",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
    {
      name: "imageForeground",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
    {
      name: "imageMobile",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png"],
    },
  ],
};

const block = {
  component: Component,
  config: config,
};

export default block;
