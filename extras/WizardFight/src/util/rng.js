export function randomDmg(low, high) {
	return Math.floor(Math.random() * (high - low + 1)) + low;
}

export function coinFlip() {
  return Math.random() < 0.5 ? true : false;
}
