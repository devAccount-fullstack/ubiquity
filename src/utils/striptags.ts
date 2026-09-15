export function striptags(input?: string): string {
  if (!input) return "";
  return input
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}
