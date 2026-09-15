import { BuilderContent } from "@builder.io/sdk";

function ensureLeadingSlashUnlessExternal(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return url.startsWith("/") ? url : "/" + url;
}

export function createNextRedirect(redirect: BuilderContent) {
  const { source, destination, permanent } = redirect.data || {};

  if (typeof source !== "string" || !source.trim()) {
    throw new Error("Redirect source must be a non-empty string.");
  }
  if (typeof destination !== "string" || !destination.trim()) {
    throw new Error("Redirect destination must be a non-empty string.");
  }
  const urlObj = new URL(source, "http://dummy");
  const sourcePath = ensureLeadingSlashUnlessExternal(urlObj.pathname || "/");
  const searchParams = Array.from(urlObj.searchParams.entries());

  const has = searchParams.map(([key, value]) => ({
    type: "query",
    key,
    value,
  }));

  return {
    source: sourcePath,
    has,
    destination: ensureLeadingSlashUnlessExternal(destination),
    permanent,
  };
}
