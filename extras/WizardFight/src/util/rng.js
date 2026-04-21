export function randomDmg(low, high) {
	return Math.floor(Math.random() * (high - low + 1)) + low;
}

export function coinFlip() {
  return Math.random() < 0.5 ? true : false;
}

// will always be out of 100%
export function percentChance(percent) {
	const randomNumber = Math.ceil(Math.random() * 101)
	const toBeat = 100 - percent
	let success

	randomNumber >= toBeat ? success = true : success = false;

	return success
}
