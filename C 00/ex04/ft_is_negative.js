function isNegative(nb) {
	if (nb < 0) {
		return "N";
	}
	return "P";
}

console.log(isNegative(0));
console.log(isNegative(1));
console.log(isNegative(-1));
console.log(isNegative(-2));
console.log(isNegative(-3));
