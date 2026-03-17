import * as rng from "../util/rng.js";

class Character {
  constructor(data) {
    this.name = data.name;
    this.maxHp = 100;
    this.currentHp = this.maxHp;
    this.stats = {
      str: data.stats.str,
      dex: data.stats.dex,
      int: data.stats.int,
      wis: data.stats.wis,
      con: data.stats.con,
    };
    this.status = [];
    this.alive = true;
    this.equipment = {
      head: null,
      torso: null,
      legs: null,
      hand: null,
    };
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

  fullRest() {
    this.hp = this.maxHp;
  }

  isAlive() {
    if (this.currentHp > 0) return true;
    return false;
  }

  equip(item) {
    this.equipment[item.slot] = item;
  }

  getActualAtk(raw) {
    let elementArray = [];
    let statusArray = [];
    let equipmentMods = 0;
    let pierceMod = 0;
    for (const item of Object.values(this.equipment)) {
      if (item?.type == "weapon") {
        equipmentMods += item.atkMod;
        pierceMod += item.pierce;
        if (item.dmgType.length)
          statusArray = [...statusArray, ...item.dmgType];
        if (item.elementType.length)
          elementArray = [...elementArray, ...item.elementType];
      }
    }

    const actualAtk = raw + this.stats.atk + equipmentMods;

    return { actualAtk, pierceMod, statusArray, elementArray };
  }

  getActualDef() {
    return this.stats.def;
  }
}

export default Character;
