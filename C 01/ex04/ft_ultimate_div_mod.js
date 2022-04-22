function ft_ultimate_div_mod(a, b) {
	let div;
	let mod;

	if (b === 0) {
		div = 0;
		mod = a;
	} else {
		div = Math.floor(a / b);
		mod = a % b;
	}
	return [div, mod];
}

console.log(`[ Divisão / Resto ]`);
console.log(ft_ultimate_div_mod(10, 3));
console.log(ft_ultimate_div_mod(7, 4));
console.log(ft_ultimate_div_mod(42, 6));
console.log(ft_ultimate_div_mod(0, 0));
console.log(ft_ultimate_div_mod(1, 1));
console.log(ft_ultimate_div_mod(1, -1));
console.log(ft_ultimate_div_mod(-1, 1));
console.log(ft_ultimate_div_mod(-1, -1));
console.log(ft_ultimate_div_mod(0, -1));
console.log(ft_ultimate_div_mod(-1, 0));
console.log(ft_ultimate_div_mod(2, 10));
console.log(ft_ultimate_div_mod(10, 2));
