export function getModifiersByWeaponType(equipment) {
	let atkMods = 0
	let defMods = 0
	let pierceMods = 0

	let statusArray = []
	let elementArray = []


	for (const item of Object.values(equipment)) {
		if (item?.type) {
			switch (item.type) {
				case "weapon":
					atkMods += item?.atkMod
					pierceMods += item.pierce
					break
				case "armour":
					defMods += item?.defMod
					break
				default:
					break
			}
		if (item.dmgType?.length) statusArray = [...statusArray, ...item.dmgType];
		if (item.elementType?.length) elementArray = [...elementArray, ...item.elementType];
		}
	}

return { atkMods, defMods, pierceMods, statusArray, elementArray }
}
