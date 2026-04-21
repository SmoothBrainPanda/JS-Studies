import * as rng from "../util/rng.js"
import * as battleUtil from "../util/battle.js"
import { addMessage } from "../managers/messages.js"
import { determineEffect, procElements, resolveProcs } from "../util/elements.js"

class Character {
	constructor(data) {
		this.name = data.name
		this.maxHp = 100
		this.currentHp = this.maxHp
		this.stats = {
			str: data.stats.str,
			dex: data.stats.dex,
			int: data.stats.int,
			wis: data.stats.wis,
			con: data.stats.con,
		}
		this.equipment = {
			head: null,
			torso: null,
			legs: null,
			hand: null,
			accessory: null
		}
		this.status = []
		this.blind = false
		this.stunned = false
		this.resistances = []
		this.immunities = []
		this.vulnerabilities = []
	}

	attack(target) {
		if (this.stunned) {
			console.log('here');
			addMessage(`${this.name} is stunned!`)
			return
		}

		const atk = this.attacks[Math.floor(Math.random() * this.attacks.length)]

		addMessage(atk.message)
		atk.rawDmgValue = rng.randomDmg(atk.dmgLow, atk.dmgHigh)

		if (this.blind) {
			addMessage(`${this.name} is blinded!`)
			atk.rawDmgValue = Math.floor(atk.rawDmgValue * 0.75)
		}

		const actualAtk = this.getActualAtk(atk)

		target.takeDamage(actualAtk)
	}

	takeDamage(attack) {
		const actualDef = this.getActualDef()
		const range = attack.actualAtk + actualDef

		let hit = Math.floor(Math.random() * range) + 1

		const dmg = this.elementEffects(attack.elementArray, hit)

		if (hit > (actualDef - attack.pierceMods)) {
			this.currentHp -= dmg
			addMessage(`${this.name} took ${attack.actualAtk} points of damage`)
		} else {
			addMessage("the attack failed")
		}
	}

	statusDamage(value) {
		this.currentHp -= value
	}

	heal(value) {
		this.currentHp = this.currentHp + value
		if (this.currentHp > this.maxHp) this.currentHp = this.maxHp
	}

	revive() {
		//
	}

	fullRest() {
		this.hp = this.maxHp
	}

	isAlive() {
		if (this.currentHp > 0) return true
		return false
	}

	equip(items) { // items must always be an array
		items.map((x) => {
			if (!x) return

			this.equipment[x.slot] = x
			if (x.statusMod) {
				switch (x.statusMod.type) {
					case "resistance":
						this.resistances = [...this.resistances, ...x.statusMod.status]
						break
					case "immunity":
						this.immunities = [...this.immunities, ...x.statusMod.status]
						break
					case "vulnerability":
						this.vulnerabilities = [...this.vulnerabilities, ...x.statusMod.status]
						break
					default:
						return
				}
			}
		})
	}

	unequip(slot) {
		this.equipment[slot] = null
		this.resistances = []

		const newEquipList = Object.values(this.equipment)
		this.equip(newEquipList)
	}

	getActualAtk(raw) {
		let { atkMods, pierceMods, statusArray, elementArray } = battleUtil.getModifiersByEquipmentType(this.equipment)

		const actualAtk = raw.rawDmgValue + this.stats.atk + atkMods

		return { actualAtk, pierceMods, statusArray, elementArray }
	}

	getActualDef() {
		let { defMods } = battleUtil.getModifiersByEquipmentType(this.equipment)

		const actualDef = this.stats.def + defMods
		return actualDef
	}

	elementEffects(elementArray, hit) {
		const dmgPerEffect = hit / elementArray.length
		let elementSlices = elementArray.length
		let returnValue

		const immunitiesCount = elementArray.filter(effect => this.immunities.includes(effect.type)).length
		const immunitiesList = elementArray.filter(effect => this.immunities.includes(effect.type))
		const resistancesCount = elementArray.filter(effect => this.resistances.includes(effect.type)).length
		const resistancesList = elementArray.filter(effect => this.resistances.includes(effect.type))
		const vulnerabilitiesCount = elementArray.filter(effect => this.vulnerabilities.includes(effect.type)).length
		const vulnerabilitiesList = elementArray.filter(effect => this.vulnerabilities.includes(effect.type))

		const overallCount = immunitiesCount || 0 + resistancesCount || 0 + vulnerabilitiesCount || 0

		if (immunitiesCount) {
			if (elementArray.length > 1) {
				elementSlices -= elementArray.filter(effect => this.immunities.includes(effect)).length
			} else {
				elementSlices = 0
			}
			addMessage("it's like you're not even there (part of the attack was resisted)")
		}

		if (resistancesCount) {
			if (elementArray.length > 1) {
				elementSlices -= (elementArray.filter(effect => this.resistances.includes(effect)).length * 0.5)
			} else {
				elementSlices = 0.5
			}

			this.status = [...this.status, ...determineEffect(vulnerabilitiesList, 25)]
			addMessage("whomp whomp (part of the attack was ignored)")
		}

		if (elementArray.filter(effect => this.vulnerabilities.includes(effect.type)).length) {
			if (elementArray.length > 1) {
				elementSlices += (elementArray.filter(effect => this.vulnerabilities.includes(effect)).length * 2)
			} else {
				elementSlices = 2
			}

			this.status = [...this.status, ...determineEffect(vulnerabilitiesList, 99)] // TODO: replace 99 with 75
			addMessage("I don't think he'll recover from this one (part of the attack did extra damage)")
		}

		returnValue = Math.ceil(elementSlices * dmgPerEffect)

		return returnValue
	}

	startTurn() {
		addMessage(`---------------\n${this.name} starts thier turn`)
		const procArray = procElements(this.status)
		const effects = resolveProcs(procArray)

		this.status = effects.statusArray
		this.statusDamage(effects.totalDmg)

		this.stunned = effects.stunned
		this.blind = effects.blind
	}
}

export default Character
