import Character from "../character.js";
import statsMod from "../../util/stats.js";

class Barbarian extends Character {
	constructor(data) {
		super(data)
		this.job = 'barbarian'
		this.stats = statsMod(this.job, this.stats)
		console.log('New Barbarian created');
		console.log(this);
	}

	rage() {
		//
	}

	recklessAttack() {
		//
	}
}

export default Barbarian
