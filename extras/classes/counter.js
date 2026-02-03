class Counter {
  number;

  constructor() {
    this.number = 0;
  }

  increment(randomNumber) {
    for (let step = 0; step < randomNumber; step++) {
      this.number++;
    }
  }

  decrement(randomNumber) {
    for (let step = 0; step < randomNumber; step++) {
      this.number--;
      console.log("Value is being decreased ", step + 1, " amount of times");
    }
    console.log("\n");
  }

  reset(randomNumber) {
    for (let step = 0; step < randomNumber; step++) {
      this.number = 0;
      console.log("Value is being reset ", step + 1, " amount of times");
    }
    console.log("\n");
  }
}

const counter = new Counter();
console.log(counter);
counter.increment(10);
console.log(counter);

counter.decrement(10);
console.log(counter);

counter.reset(10);
console.log(counter);
