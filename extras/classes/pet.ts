type TPet = {
	name: string
	hunger: number
	energy: number
	happiness: number
	alive: boolean
}

interface IPet {
	play(): void
	feed(): void
	sleep(): void
	checkHealth(): void
	checkHappiness(): void
	vetVisit(): void
}

class Pet implements IPet {
	name: string
	hunger: number
	energy: number
	happiness: number
	alive: boolean

	constructor(name: string) {
		this.name = name
		this.hunger = 0
		this.energy = 80
		this.happiness = 90
		this.alive = true

		console.log(`Welcome to the world ${this.name}!`);
	}

	play() {
		this.happiness += 10
		this.hunger += 25
		this.energy -= 25

		console.log(`${this.name} played hardt and is fafb (fast as fuck boi)`);
	}

	feed() {
		this.hunger -= 15
		this.happiness += 15
		this.energy -= 15

		console.log(`${this.name} eated hardt and is fafb (fat as fuck boi)`);
	}

	sleep() {
		this.hunger += 5
		this.energy += 25
		this.happiness += 15

		console.log(`${this.name} honk shoo'd and slept on that thang`);
	}

	checkHealth() {
		//
	}

	checkHappiness() {
		//
	}

	vetVisit() {
		this.checkHealth()
		console.log(
			`
			${this.name} went to the vet!
			Here is their info:
			Hunger: ${this.hunger}
			Energy: ${this.energy}
			Happiness: ${this.happiness}
			`
		);
	}
}

const lilGuy = new Pet('Fergi')
lilGuy.play()
lilGuy.vetVisit()
lilGuy.feed()
lilGuy.vetVisit()
lilGuy.sleep()
lilGuy.vetVisit()
