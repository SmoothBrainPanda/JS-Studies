import { addMessage, print } from '../managers/messages.js'

class Battle {
	constructor(hero, npc) {
		this.hero = hero
		this.npc = npc
	}

	fight() {
		addMessage('Fight start')
		let round = 1

		while (this.hero.isAlive() && this.npc.isAlive()) {
			this.turn(round)
			round++
		}

		if (this.hero.isAlive()) addMessage(`${this.hero.name} wins!`);
		if (this.npc.isAlive()) addMessage(`${this.npc.name} wins!`);

		print()
	}

	turn(num) {
		addMessage(`---------------\nTurn #${num}`);

		this.hero.startTurn()
		this.hero.attack(this.npc)

		addMessage(`${this.npc.name} hp: ${this.npc.currentHp}/${this.npc.maxHp}`);
		if (!this.npc.isAlive()) return false

		this.npc.startTurn()
		this.npc.attack(this.hero)

		addMessage(`${this.hero.name} hp: ${this.hero.currentHp}/${this.hero.maxHp}`);
	}
}

export default Battle
