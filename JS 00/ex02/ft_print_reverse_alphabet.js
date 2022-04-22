function printReverseAlphabet() {
	for (let i = 35, alfabeto = ""; --i >= 10; ) {
		alfabeto += i.toString(36);
		if (i === 10) {
			console.log(alfabeto);
		}
	}
}

console.log("Alfabeto: ");
printReverseAlphabet();
