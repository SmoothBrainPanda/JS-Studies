import * as rng from "../util/rng.js";

class Monster {
  constructor() {
    this.name = "Gobbo";
    this.maxHp = 100;
    this.currentHp = this.maxHp;
    this.def = 15;
    this.atk = 12;
    this.attacks = [
      {
        name: "A shiv to the Knee",
        dmgHigh: 15,
        dmgLow: 0,
        pierce: 5,
        dmgType: "none",
        message: `${this.name} used their nasty shiv.`,
      },
      {
        name: "A pocket full of sand.",
        dmgHigh: 10,
        dmgLow: 0,
        pierce: 5,
        dmgType: "none",
        message: `${this.name} threw sand in their opponents eyes.`,
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

  takeDamage(attack) {
    const actualDef = this.getActualDef();
    const range = attack.actualAtk + actualDef;

    const hit = Math.floor(Math.random() * range) + 1;

    if (hit > actualDef) {
      this.currentHp -= attack.actualAtk;
      console.log(`${this.name} took ${attack.actualAtk} points of damage`);
    } else {
      console.log("It was super uneffective");
    }
  }

  heal() {
    //
  }

  isAlive() {
    if (this.currentHp > 0) return true;
    return false;
  }

  getActualAtk(raw) {
    let elementArray = [];
    let statusArray = [];
    let equipmentMods = 0;
    let pierceMod = 0;
    // for (const item of Object.values(this.equipment)) {
    //   if (item?.type == "weapon") {
    //     equipmentMods += item.atkMod;
    //     pierceMod += item.pierce;
    //     if (item.dmgType.length)
    //       statusArray = [...statusArray, ...item.dmgType];
    //     if (item.elementType.length)
    //       elementArray = [...elementArray, ...item.elementType];
    //   }
    // }

    const actualAtk = raw + this.atk + equipmentMods;

    return { actualAtk, pierceMod, statusArray, elementArray };
  }

  getActualDef() {
    return this.def;
  }
}

export default Monster;
