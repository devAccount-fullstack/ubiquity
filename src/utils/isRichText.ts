export function isRichText(text: string | undefined): boolean {
  return text ? text.trim() !== "<p><br></p>" : false;
}
