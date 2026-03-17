class Pet {
  name;
  hunger;
  energy;
  happiness;
  alive;

  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.energy = 80;
    this.happiness = 90;
    this.alive = true;

    console.log(`Welcome to the world ${this.name}!`);
  }

  play() {
    this.happiness += 10;
    this.hunger += 25;
    this.energy -= 25;

    console.log(`${this.name} played hardt and is fafb (fast as fuck boi)`);
  }

  feed() {
    this.hunger -= 15;
    this.happiness += 15;
    this.energy -= 15;

    console.log(`${this.name} eated hardt and is fafb (fat as fuck boi)`);
  }

  sleep() {
    this.hunger += 5;
    this.energy += 25;
    this.happiness += 15;

    console.log(`${this.name} honk shoo'd and slept on that thang`);
  }

  checkHealth() {
    if (this.hunger <= 25) this.happiness += 10;
    if (this.hunger <= 50) this.happiness += 5;
    if (this.hunger <= 75) this.happiness -= 5;
    if (this.hunger <= 99) this.happiness -= 10;
    if (this.hunger >= 100) this.alive = false;
  }

  checkHappiness() {
    //
  }

  checkPet() {
    //
  }

  vetVisit() {
    this.checkHealth();
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

const pet = new Pet("Pebble");
pet.play();
