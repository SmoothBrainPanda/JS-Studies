import * as print from '../util/print.js'

class Character {
	constructor(data) {
		this.name = data.name
		this.hp = 100
		this.stats = {
			str: data.stats.str,
			dex: data.stats.dex,
			int: data.stats.int,
			wis: data.stats.wis,
			con: data.stats.con
		}

		print.characterCreated(this)
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
