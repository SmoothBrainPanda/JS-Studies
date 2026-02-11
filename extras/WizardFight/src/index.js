import characterCreator from "./models/jobs/index.js";
import Monster from "./models/monster.js";
import Battle from "./models/battle.js";
import { testEquip } from "./models/equipment.js";

const data = {
	name: "Dave",
	stats: {
		str: 7,
		dex: 15,
		int: 19,
		wis: 9,
		con: 10
	},
	job: ''
}

const dave = characterCreator(data)
const gobbo = new Monster()

const battle = new Battle(dave, gobbo)
battle.fight()
