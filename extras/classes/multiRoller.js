import Dice from "./dice.js";

class MultiRoller {
  dieArray;

  constructor(data) {
    this.dieArray = [];
    if (data.length) {
      data.map((x) => {
        const diceType = x.dx;
        const diceCount = x.dc;

        for (let i = 1; i <= diceCount; i++) {
          const dice = new Dice(diceType);
          this.dieArray.push(dice);
        }
      });
    } else {
      const dice = new Dice();
      this.dieArray.push(dice);
    }
  }

  rollAll() {
    let count = 0;
    this.dieArray.map((x) => {
      count += 1;
      const result = x.roll();
      console.log(`Dice ${count} : ${result} on a d${x.sides}`);
    });
  }
}

const set = [
  {
    dx: 12,
    dc: 4,
  },
  {
    dx: 8,
    dc: 6,
  },
  {
    dx: 4,
    dc: 1,
  },
  {
    dx: 20,
    dc: 6,
  },
];

const multiRoller = new MultiRoller(set);
multiRoller.rollAll();

export default MultiRoller;
