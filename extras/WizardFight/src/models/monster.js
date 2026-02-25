import * as rng from "../util/rng.js"

class Monster {
	constructor() {
		this.name = 'Goblin'
		this.maxHp = 100
		this.currentHp = this.maxHp
		this.def = 9
		this.atk = 12
		this.attacks = [
			{
				name: 'a shiv to the knee',
				dmgHigh: 15,
				dmgLow: 10,
				pierce: 14,
				dmgType: 'none',
				message: `${this.name} lunged with their rusty shiv!`
			},
			{
				name: 'a pocket full of sand',
				dmgHigh: 10,
				dmgLow: 5,
				pierce: 2,
				dmgType: 'none',
				message: `${this.name} threw a pocketful of sand!`
			}
		]
		this.alive = true
	}

	attack(target) {
		const atk = this.attacks[Math.floor(Math.random() * this.attacks.length)]
		console.log(`${this.name} used ${this.atk.name}.`);
		console.log(atk.message);
		target.takeDamage(atk)
	}

	takeDamage(attack) {
		const damage = rng.randomDmg(attack.dmgLow, attack.dmgHigh)

		if (this.def < attack.pierce) {
			this.currentHp -= damage
		} else {
			if (rng.coinFlip()) this.currentHp -= damage
		}

		console.log(`${this.name} took ${damage} points of damage`);
	}

	ded() {
		if (this.currentHp < 1) {
			this.alive = false
		}

		return this.alive
	}
}

export default Monster
