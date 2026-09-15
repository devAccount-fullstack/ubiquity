import { BuilderContent } from "@builder.io/sdk";

export const searchFilter = (posts: BuilderContent[], query: string) => {
  const queryLower = query.toLowerCase();

  const queryVariants = (() => {
    const variants = [queryLower];
    if (queryLower.includes("&")) {
      variants.push(queryLower.replace(/&/g, "and"));
    } else if (queryLower.includes(" and ")) {
      variants.push(queryLower.replace(/\band\b/g, "&"));
    }
    return variants;
  })();

  const queryRegexes = queryVariants.map((q) => new RegExp(`\\b${q}\\b`, "i"));

  const checkFields = (post: BuilderContent) => {
    const item = post.data;
    if (!item) return false;
    const matchesQuery = (text: string) => {
      if (!text) return false;
      return queryRegexes.some((regex) => regex.test(text));
    };

    if (item.title && matchesQuery(item.title)) {
      return true;
    }
    if (item.page && matchesQuery(item.page)) {
      return true;
    }
    if (item.model && matchesQuery(item.model)) {
      return true;
    }
    if (item.description && matchesQuery(item.description)) {
      return true;
    }
    if (item.category && matchesQuery(item.category)) {
      return true;
    }

    if (item.blocks && Array.isArray(item.blocks)) {
      return item.blocks.some((block) => {
        if (block.component && block.component.options) {
          const options = block.component.options;

          if (block.component.name === "Core:Section") {
            const blockJson = JSON.stringify(block);

            return matchesQuery(blockJson);
          }
          // General check for other components
          else {
            for (const key in options) {
              if (
                typeof options[key] === "string" &&
                matchesQuery(options[key])
              ) {
                return true;
              } else {
                const blockJson = JSON.stringify(block);
                return matchesQuery(blockJson);
              }
            }
          }
        }

        return false;
      });
    }

    return false;
  };

  const filteredData = posts.filter(checkFields);

  return filteredData;
};
