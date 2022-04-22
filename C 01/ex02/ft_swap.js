function ft_swap(a, b) {
	console.log(`==========================`);
	let aux = a;
	console.log(`a: ${a}`);
	console.log(`b: ${b}`);
	console.log(`===== Invertendo... =====`);
	a = b;
	b = aux;
	return `a: ${a}\nb: ${b}\n==========================`;
}

console.log(ft_swap(1, 2));
console.log(ft_swap(42, 24));
