class DiceSets {
  diceSides;

  constructor(diceSet) {
    if (diceSet) {
      this.diceSides = diceSet;
    } else {
      this.diceSides = 20;
    }
    console.log(`Which Dice would you like to roll?`);
  }

  diceRoll(diceSet) {
    this.diceSides = diceSet;
    const result = Math.floor(Math.random() * this.diceSides) + 1;
    console.log(`You rolled a ${result}`);
    return this.diceSides;
  }

  multipleDice(x) {
    let rolls = 0;
    while (rolls < x) {
      this.diceRoll(this.diceSides);
      rolls += 1;
    }
    // console.log(`You've rolled a d${this.diceSides} ${rolls} times!`);
  }
}

const diceRoller = new DiceSets();
// diceRoller.diceRoll(20);
diceRoller.multipleDice(6);
