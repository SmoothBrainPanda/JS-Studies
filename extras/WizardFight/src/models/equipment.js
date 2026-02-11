import { rarityLabel } from "../util/color.js";

const Slot = {
	HEAD: "head",
	TORSO: "torso",
	BOOTS: "boots",
	RIGHT_HAND: "right_hand",
	ACCESSORY_1: "accessory_1",
	ACCESSORY_2: "accessory_2",
}

const Rarity = {
  COMMON: "common",       // White  - no special bonuses
  UNCOMMON: "uncommon",   // Green  - minor bonus
  RARE: "rare",           // Blue   - meaningful bonus
  EPIC: "epic",           // Purple - strong bonus + secondary effect
  LEGENDARY: "legendary", // Gold   - powerful bonus + unique passive
};


const RarityDamageMultiplier = {
  [Rarity.COMMON]: 1.0,
  [Rarity.UNCOMMON]: 1.1,
  [Rarity.RARE]: 1.25,
  [Rarity.EPIC]: 1.5,
  [Rarity.LEGENDARY]: 1.8,
};

const Elements = {
	FIRE: "fire",
	WATER: "water",
	EARTH: "earth",
	WIND: "wind",
	LIGHT: "light",
	DARK: "dark",
	NONE: "none"
}

const ElementalMatchups = {
	//
}

const ElementDamageMultiplier = {
	VULNERABLE: 1.5,
	NEUTRAL: 1.0,
	Resistant: 0.5,
	IMMUNE: 0
}

export function testEquip() {
	const rarity = "uncommon"
	console.log(`Rarity multi for ${rarity}: ${RarityDamageMultiplier[rarity]}`);
	console.log(`Rarity color for ${rarityLabel(rarity)}`);
	console.log(RarityDamageMultiplier);
}
