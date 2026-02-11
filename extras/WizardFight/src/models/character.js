import * as print from '../util/print.js'

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
			con: data.stats.con
		}
		// this.equipment = equip()
		this.status = []
		this.alive = true

		print.characterCreated(this)
	}

	attack() {
		//
	}

	takeDamage(damage) {
		this.currentHp -= damage
		console.log(`${this.name}'s HP: ${this.currentHp}/${this.maxHp}`);
	}

	heal() {
		//
	}

	fullRest() {
		this.hp = this.maxHp
	}

	checkStatus() {
		if (ded()) {
			console.log("YOU DIED");
		} else {
			console.log("Oh my god it's Jason Bourne");
		}
	}

	ded() {
		if (this.hp > 0) {
			console.log("It's Alive");
			return false
		} else {
			console.log("He ded");
			return true
		}
	}
}

export default Character
