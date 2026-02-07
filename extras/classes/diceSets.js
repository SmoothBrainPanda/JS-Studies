import Dice from "./dice.js"

class DiceSet {
	dieArray

	constructor(data) {
		this.dieArray = []

    if (data.length) {
      data.map((x) => {
				const diceCount = x.dc
				const diceType = x.dx

				for (let i = 0; i <= diceCount; i++) {
					const dice = new Dice(diceType)
					this.dieArray.push(dice)
				}
			})
    } else {
			const dice = new Dice()
      this.dieArray.push(dice)
    }
	}

	rollAll() {
		let count = 0
		this.dieArray.map((x) => {
			count += 1
			const result = x.roll()
			console.log(`Dice #${count}: ${result}`);
		})
	}
}

const set = [
	{
		dx: 12,
		dc: 4
	}
]

const multiRoller = new DiceSet(set)
multiRoller.rollAll()

export default DiceSet
