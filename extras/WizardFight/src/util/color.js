const hexToRgb = (hex) => {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
};

const colorText = (hex, text) => {
  const [r, g, b] = hexToRgb(hex);
  return `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
};

const colorBlock = (hex, width = 2) => {
  const [r, g, b] = hexToRgb(hex);
  return `\x1b[48;2;${r};${g};${b}m${" ".repeat(width)}\x1b[0m`;
};

export const rarityLabel = (rarity) => {
	const Rarity = {
		COMMON: "common",       // White  - no special bonuses
		UNCOMMON: "uncommon",   // Green  - minor bonus
		RARE: "rare",           // Blue   - meaningful bonus
		EPIC: "epic",           // Purple - strong bonus + secondary effect
		LEGENDARY: "legendary", // Gold   - powerful bonus + unique passive
	};

	const RarityColors = {
		[Rarity.COMMON]: "#9CA3AF",
		[Rarity.UNCOMMON]: "#22C55E",
		[Rarity.RARE]: "#3B82F6",
		[Rarity.EPIC]: "#A855F7",
		[Rarity.LEGENDARY]: "#F59E0B",
	};

  const hex = RarityColors[rarity];
  return colorText(hex, rarity.toUpperCase());
};

export const elementLabel = (element) => {
	const Elements = {
		FIRE: "fire",
		WATER: "water",
		EARTH: "earth",
		WIND: "wind",
		LIGHT: "light",
		DARK: "dark",
		NONE: "none"
	}

	const ElementColors = {
		[Elements.FIRE]: "",
		[Elements.WATER]: "",
		[Elements.EARTH]: "",
		[Elements.WIND]: "",
		[Elements.LIGHT]: "",
		[Elements.DARK]: "",
		[Elements.NONE]: "",
	}
}

