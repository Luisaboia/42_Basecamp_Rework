const array = [];

function writeCombo(n, holders) {
	let i = 0;
	const holdersArray = [];
	holders = holdersArray;

	while (i < n) {
		holders.push(i);
		i++;
	}

	i = n - 1;

	while (i >= 0) {
		if (holders[i] != 9 - (n - 1 - i)) {
			break;
		}
		i--;
	}
	if (!last) {
		holders[i]++;
		for (let j = i + 1; j < n; j++) {
			holders[j] = holders[j - 1] + 1;
		}
	}
}

function printCombinationCallback(n, curr, holders, st_i) {
	if (curr.length == n) {
		array.push(curr.join(""));
		return;
	}
	for (let i = st_i; i < 10; i++) {
		curr.push(i);
		printCombinationCallback(n, curr, holders, i + 1);
		curr.pop();
	}
}

function ft_print_combn(n) {
	if (n < 0 || n > 9) {
		return "não é permitido";
	}
	const curr = [];
	const holders = [];
	printCombinationCallback(n, curr, holders, 0);
	console.log(array);
}

ft_print_combn(2);
