import Barbarian from "./barbarian.js";

function characterCreator(character) {
	switch(character.job) {
		case "Barbarian":
			return new Barbarian(character)
		case "Ranger":
			console.log("Ranger");
			break
		case "Wizard":
			console.log("Wizard");
			break
		case "Fighter":
			console.log("Fighter");
			break
	}
}

export default characterCreator
