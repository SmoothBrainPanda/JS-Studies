class Battle {
	constructor(red, blue) {
		this.red = red
		this.blue = blue

		this.fightCard()
	}

	fight() {
		console.log('Fight start!');
		let round = 1
		while (this.red.ded() && this.blue.ded()) {
			this.turn(round)
			round++
		}

		if (this.red.ded()) console.log(`${this.red.name} wins!`);
		if (this.blue.ded()) console.log(`${this.blue.name} wins!`);
	}

	turn(num) {
		console.log(`Turn #${num}`);
		this.red.attack(this.blue)
		this.blue.attack(this.red)
	}

	fightCard() {
		console.log(`
			RED CORNER:	${this.red.name}
			BLUE CORNER:	${this.blue.name}
		`);
	}
}

export default Battle
