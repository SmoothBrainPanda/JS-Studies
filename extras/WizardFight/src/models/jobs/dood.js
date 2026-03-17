import Character from "../character.js";
import statsMod from "../../util/stats.js";
import * as rng from "../../util/rng.js";

class Dood extends Character {
  constructor(data) {
    super(data);
    this.stats = statsMod();
    this.def = 12;
    this.attacks = [
      {
        name: "Flail",
        dmgHigh: 15,
        dmgLow: 0,
        dmgType: "none",
        pierce: 5,
        message: `${this.name} flailed.`,
      },
      {
        name: "Kick",
        dmgHigh: 10,
        dmgLow: 0,
        dmgType: "none",
        pierce: 5,
        message: `${this.name} kicked.`,
      },
    ];
  }

  attack(target) {
    const atk = this.attacks[Math.floor(Math.random() * this.attacks.length)];
    console.log(atk.message);
    const rawDmgValue = rng.randomDmg(atk.dmgLow, atk.dmgHigh);

    const actualAtk = this.getActualAtk(rawDmgValue);
    actualAtk.pierceMod += atk.pierce;
    target.takeDamage(actualAtk);
  }
}

export default Dood;
