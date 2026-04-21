import Character from "../character.js";
import statsMod from "../../util/stats.js";
import * as rng from '../../util/rng.js'

class Dood extends Character {
	constructor(data) {
		super(data)
		this.stats = statsMod()
		this.def = 2
		this.attacks = [
			{
				name: 'flail',
				dmgHigh: 15,
				dmgLow: 0,
				dmgType: 'none',
				pierce: 5,
				message: `${this.name} flailed!`
			},
			{
				name: 'kick',
				dmgHigh: 15,
				dmgLow: 0,
				dmgType: 'none',
				pierce: 5,
				message: `${this.name} kicked!`
			}
		]
	}

}

export default Dood
