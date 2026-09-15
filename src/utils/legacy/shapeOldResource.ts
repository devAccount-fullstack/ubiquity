interface BuilderBlock {
  component?: {
    name?: string;
    options?: {
      blocks?: BuilderBlock[];
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  children?: BuilderBlock[];
  [key: string]: unknown;
}

function secureRandomHex32() {
  const bytes = new Uint8Array(16); // 16 bytes = 128 bits
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function shapeOldResource(content: {
  data: {
    blocks: BuilderBlock[];
  };
}) {
  function findFirstBlocksArrayWithPlainText(obj: BuilderBlock[]) {
    let result: BuilderBlock[] | null = null;

    function search(node: BuilderBlock | BuilderBlock[]) {
      if (result) return;

      if (Array.isArray(node)) {
        for (const item of node) {
          search(item);
          if (result) return;
        }
      } else if (typeof node === "object" && node !== null) {
        for (const key of Object.keys(node)) {
          const value = (node as Record<string, unknown>)[key];

          // Look for an array named "blocks"
          if (
            (key === "blocks" || key === "children") &&
            Array.isArray(value)
          ) {
            for (const item of value) {
              if ((item as BuilderBlock)?.component?.name === "Plain Text") {
                result = value as BuilderBlock[]; // Found the blocks array that contains Plain Text
                return;
              }
            }
          }

          // Continue searching recursively
          search(value as BuilderBlock | BuilderBlock[]);
          if (result) return;
        }
      }
    }

    search(obj);
    return result;
  }

  const blocksWithPlainText = findFirstBlocksArrayWithPlainText(
    content.data.blocks,
  );

  const newContent = {
    "@type": "@builder.io/sdk:Element",
    "@version": 2,
    id: "builder-" + secureRandomHex32(),
    component: {
      name: "Content - Resource",
      options: {},
      isRSC: null,
    },
    children: blocksWithPlainText,
    responsiveStyles: {
      large: {
        position: "relative",
      },
    },
  };

  return newContent;
}
