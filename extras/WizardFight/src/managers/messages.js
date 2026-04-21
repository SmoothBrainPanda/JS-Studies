import { createState } from "@persevie/statemanjs";

const messageState = createState({messages: []})
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function addMessage(message) {
	console.log(message);
	messageState.update((state) => {
		state.messages.push(message)
	})
}

export function dumpMessages() {
	return messageState.get()
}

export async function print() {
	const messages = messageState.get().messages

	for (const x of messages) {
		console.log(x);
		await sleep(500)
	}
}
