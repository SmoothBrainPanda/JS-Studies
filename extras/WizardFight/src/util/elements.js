import { percentChance } from "./rng.js";

const burnBaseDmg = 8
const freezeBaseDmg = 2
const shockedBaseDmg = 12

let stunned = false
let blind = false

export function determineEffect(element, base) {
	const elementEffects = []

	element.forEach((x) => {
		const actualPercent = x.elementEffectChance + base

		switch(x.type) {
			case "fire":
				if (percentChance(actualPercent)) {
					for (let i = 1; i <= x.stackAmount; i++) {
						elementEffects.push("burn")
					}
				}
				return
			case "ice":
				if (percentChance(actualPercent)) {
					for (let i = 1; i <= x.stackAmount; i++) {
						elementEffects.push("freeze")
					}
				}
				return
			case "wind":
				if (percentChance(actualPercent)) {
					for (let i = 1; i <= x.stackAmount; i++) {
						elementEffects.push("blind")
					}
				}
				return
			case "water":
				if (percentChance(actualPercent)) {
					for (let i = 1; i <= x.stackAmount; i++) {
						elementEffects.push("wet")
					}
				}
				return
			case "lightning":
				if (percentChance(actualPercent)) {
					for (let i = 1; i <= x.stackAmount; i++) {
						elementEffects.push("shocked")
					}
				}
				return
			case "earth":
				if (percentChance(actualPercent)) {
					for (let i = 1; i <= x.stackAmount; i++) {
						elementEffects.push("stunned")
					}
				}
				return
			default:
				return null
		}
	})

	return elementEffects
}

export function procElements(statusArray) {
	const uniqueStatuses = convertToObj(statusArray)
	const procArray = []

	Object.keys(uniqueStatuses).map((x) => {
		const stackCount = uniqueStatuses[x]
		switch(x) {
			case "burn":
				procArray.push(resolveBurn(stackCount))
				break
			case "freeze":
				procArray.push(resolveFreeze(stackCount))
				break
			case "blind":
				blind = true
				break
			case "wet":
				procArray.push(resolveWet(stackCount))
				break
			case "shocked":
				procArray.push(resolveShocked(stackCount, statusArray))
				break
			case "stunned":
				stunned = true
				break
			default:
				console.log('fail');
				break
		}
	})

	return procArray
}

function convertToObj(statusArray) {
	const statusObj = statusArray.reduce((a, v) => {
		a[v] = (a[v] || 0) + 1;
		return a
	}, [])

	return statusObj
}

function resolveBurn(stackCount) {
	return {
		type: "burn",
		dmg: burnBaseDmg,
		count: stackCount - 1
	}
}

function resolveFreeze(stackCount) {
	// TODO: add stat mod functions
	return {
		type: "freeze",
		dmg: freezeBaseDmg,
		count: stackCount - 1
	}
}

function resolveBlind() {
	return {
		type: "blind",
		dmg: 0,
		count: 0
	}
}

function resolveWet(stackCount) {
	return {
		type: "wet",
		dmg: 0,
		count: stackCount
	}
}

function resolveShocked(stackCount, statusArray) {
	let shockDmg = parseInt(shockedBaseDmg * stackCount)
	if (statusArray.includes('wet')) shockDmg = parseInt(shockDmg * 2)

	return {
		type: "shocked",
		dmg: shockDmg,
		count: 0
	}
}

function resolveStunned() {
	//
}

export function resolveProcs(procArray) {
	const statusArray = []
	let totalDmg = 0

	procArray.map((x) => {
		totalDmg += x.dmg
		for (let i = 0; i < x.count; i++) {
			statusArray.push(x.type)
		}
	})

	return {
		totalDmg,
		statusArray,
		stunned,
		blind
	}
}
