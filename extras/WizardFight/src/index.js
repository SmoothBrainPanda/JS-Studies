import Character from "./models/character.js";
import characterCreator from "./models/jobs/index.js";
import { testEquip } from "./models/equipment.js";

const characterData = {
	name: "Dave",
	stats: {
		str: 7,
		dex: 15,
		int: 19,
		wis: 9,
		con: 10
	},
	job: 'Barbarian'
}

const dave = characterCreator(characterData)
dave.takeDamage(10)
// const dave = new Character(characterData)
// testEquip()

