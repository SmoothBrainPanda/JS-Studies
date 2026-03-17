import characterCreator from "./models/jobs/index.js";
import Monster from "./models/monster.js";
import Battle from "./models/battle.js";
import equipment from "./data/equipment.js";

const data = {
  name: "Dave",
  stats: {
    str: 7,
    dex: 15,
    int: 19,
    wis: 9,
    con: 10,
  },
  job: "",
};

const monster = new Monster();
const dave = characterCreator(data);
const testHand = equipment[0];
const testHead = equipment[1];
dave.equip(testHand);
dave.equip(testHead);
const battle = new Battle(dave, monster);
battle.fight();
