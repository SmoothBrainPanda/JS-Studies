export function characterCreated(data) {
	console.log(`
		|-----------------------|
		|New Character Created!	|
		|-----------------------|
		| Name	:	${data.name}	|
		| HP	:	${data.hp}	|
		|-----------------------|
		| Stats			|
		| STR	:	${data.stats.str}	|
		| DEX	:	${data.stats.dex}	|
		| INT	:	${data.stats.int}	|
		| WIS	:	${data.stats.con}	|
		|_______________________|
	`);
}
