function printCombination() {
	const array = [];

	function writeCombination(a, b, c) {
		let numbers = "" + a + b + c;
		array.push(numbers);
	}
	let a = 0;
	let b;
	let c;
	while (a <= "7") {
		b = a + 1;
		while (b <= "8") {
			c = b + 1;
			while (c <= "9") {
				writeCombination(a, b, c);
				c++;
			}
			b++;
		}
		a++;
	}
	console.log(array);
}

printCombination();
