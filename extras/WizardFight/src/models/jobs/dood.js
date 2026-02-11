import Character from "../character.js";
import statsMod from "../../util/stats.js";

class Dood extends Character {
	constructor(data) {
		super(data)
		this.stats = statsMod()
		this.atk
		this.def = 12
		this.attacks = [
			{
				name: 'flail',
				dmgHigh: 15,
				dmgLow: 10,
				dmgType: 'none',
				message: `${this.name} flailed!`
			},
			{
				name: 'kick',
				dmgHigh: 15,
				dmgLow: 10,
				dmgType: 'none',
				message: `${this.name} kicked!`
			}
		]
	}

	attack(target) {
		const atk = this.attacks[Math.floor(Math.random() * this.attacks.length)]
		target.takeDamage(atk)
	}
}

export default Dood
