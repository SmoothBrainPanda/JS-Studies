import Character from "./models/character.js";

const characterData = {
	name: "Dave",
	stats: {
		str: 7,
		dex: 15,
		int: 19,
		wis: 9,
		con: 10
	},
}

const dave = new Character(characterData)
