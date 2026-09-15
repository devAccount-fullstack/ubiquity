import { backgroundColors } from "./backgroundColors";

export function textColorFromBackground(backgroundColor: string): string {
  const textColor = {
    blaze: "text-obsidian",
    obsidian: "text-white",
    mosswood: "text-white",
    dune: "text-obsidian",
    linen: "text-obsidian",
    mist: "text-obsidian",
    claret: "text-white",
    tundra: "text-white",
    light_blaze: "text-obsidian",
  };

  return (
    textColor[backgroundColor as keyof typeof backgroundColors] ||
    "text-obsidian"
  );
}
