export function characterCreated(data) {
	console.log(`
		|-----------------------|
		|New Character Created!	|
		|-----------------------|
		| Name	:	${data.name}	|
		| HP	:	${data.currentHp}/${data.maxHp}	|
		|-----------------------|
		| Stats			|
		| STR	:	${data.stats.str}	|
		| DEX	:	${data.stats.dex}	|
		| INT	:	${data.stats.int}	|
		| WIS	:	${data.stats.wis}	|
		| CON	:	${data.stats.con}	|
		|_______________________|
	`);
}
