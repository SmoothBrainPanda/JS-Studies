class Battle {
  constructor(hero, npc) {
    this.hero = hero;
    this.npc = npc;
  }

  fight() {
    console.log("Fight Start!");
    let round = 1;
    while (this.hero.isAlive() && this.npc.isAlive()) {
      this.turn(round);
      round++;
    }

    if (this.hero.isAlive()) console.log(`${this.hero.name} wins!`);
    if (this.npc.isAlive()) console.log(`${this.npc.name} wins!`);
  }

  turn(num) {
    console.log("------------");
    console.log(`Turn #${num}`);
    this.hero.attack(this.npc);
    console.log(`${this.npc.name} hp: ${this.npc.currentHp}/${this.npc.maxHp}`);
    if (!this.npc.isAlive()) return false;
    this.npc.attack(this.hero);
    console.log(
      `${this.hero.name} hp: ${this.hero.currentHp}/${this.hero.maxHp}`
    );
    console.log("------------");
  }

  print() {
    //
  }
}

export default Battle;
