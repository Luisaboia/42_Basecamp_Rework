function printAlphabet() {
	for (let i = 9, alfabeto = ""; ++i < 36; ) {
		alfabeto += i.toString(36);
		if (i === 35) {
			console.log(alfabeto);
		}
	}
}

console.log("Alfabeto: ");
printAlphabet();
