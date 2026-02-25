import Character from "../character.js";
import statsMod from "../../util/stats.js";

class Dood extends Character {
	constructor(data) {
		super(data)
		this.stats = statsMod()
		this.def = 12
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

	attack(target) {
		const atk = this.attacks[Math.floor(Math.random() * this.attacks.length)]
		console.log(atk.message);
		console.log(`${this.name} used ${this.atk.name}`);
		if (atk == 0) {
			atk = 9999
		}
		target.takeDamage(atk)
	}
}

export default Dood
