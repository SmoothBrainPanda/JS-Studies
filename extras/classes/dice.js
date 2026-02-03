class Dice {
  sides;

  constructor(diceData) {
    if (diceData) {
      this.sides = diceData;
    } else {
      this.sides = 20;
    }
    console.log(`The dice has ${this.sides} sides`);
  }

  roll() {
    const result = Math.floor(Math.random() * this.sides) + 1;
    console.log(`You rolled a ${result}`);
  }
}

const dice = new Dice();
dice.roll();
