import Barbarian from "./barbarian.js";
import Dood from "./dood.js";

function characterCreator(data) {
  switch (data.job) {
    case "barbarian":
      return new Barbarian(data);
    case "ranger":
      console.log("Ranger");
      break;
    case "wizard":
      console.log("Wizard");
      break;
    case "fighter":
      console.log("Fighter");
      break;
    default:
return new Dood(data);
  }
}

export default characterCreator;
