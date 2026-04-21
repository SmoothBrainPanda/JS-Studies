import characterCreator from "./models/jobs/index.js";
import Monster from "./models/monster.js";
import Battle from "./models/battle.js";
import * as monsters from "./data/monsters.json" with { type: 'json' }
import * as equipment from "./data/equipment.json" with { type: 'json' }

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

const data2 = {
	name: "Dave2",
	stats: {
		str: 7,
		dex: 15,
		int: 19,
		wis: 9,
		con: 10
	},
	job: ''
}

const monsterList = monsters.default
const equipmentList = equipment.default

const monster = new Monster(monsterList["5_color_omnath"])
const dave = characterCreator(data)

const testEquipment = [equipmentList["chipped_dagger"], equipmentList["amulet_of_dampness"]]
dave.equip(testEquipment)

const battle = new Battle(dave, monster)
dave.attack(monster)
// battle.fight()
