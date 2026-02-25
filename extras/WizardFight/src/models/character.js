import * as rng from "../util/rng.js"

class Character {
	constructor(data) {
		this.name = data.name
		this.maxHp = 100
		this.currentHp = this.maxHp
		this.stats = {
			str: data.stats.str,
			dex: data.stats.dex,
			int: data.stats.int,
			wis: data.stats.wis,
			con: data.stats.con,
			atk: 10, // TODO: atkMod logic
			def: 10 // TODO : defMod logic
		}
		this.status = [] // TODO: statusEffect logic
		this.alive = true
	}

	takeDamage(attack) {
		const damage = rng.randomDmg(attack.dmgLow, attack.dmgHigh)

		if (this.def > attack.pierce) {
			this.currentHp -= damage
		} else {
			if (rng.coinFlip()) this.currentHp -= damage
		}

		console.log(`${this.name} took ${damage} points of damage`);
	}

	heal() {
		//
	}

	fullRest() {
		this.hp = this.maxHp
	}

	ded() {
		if (this.currentHp > 0) return false
		return true
	}
}

export default Character
