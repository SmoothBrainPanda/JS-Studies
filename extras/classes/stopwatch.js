class Stopwatch {
  startTime;
  stopTime;
  elapsedTime;

  start() {
    this.startTime = Date.now();
    console.log(`The timer has started.`, this.startTime);
  }

  stop() {
    this.stopTime = Date.now();
    console.log(`The timer has ended.`, this.stopTime);
    this.getElapsedTime();
  }

  reset() {
    this.startTime = 0;
    this.stopTime = 0;
    this.elapsedTime = 0;
    console.log(`The stop watch has been reset.`);
  }

  getElapsedTime() {
    this.elapsedTime = (this.stopTime - this.startTime) / 1000;
    console.log(`The timer has run for ${this.elapsedTime}`);
  }
}

const stopwatch = new Stopwatch();
stopwatch.start();
setTimeout(() => {
  stopwatch.stop();
  stopwatch.reset();
}, 2000);
