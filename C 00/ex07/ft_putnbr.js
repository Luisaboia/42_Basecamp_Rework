const maxInteger = Number.MAX_SAFE_INTEGER;
const minInteger = Number.MIN_SAFE_INTEGER;

function putNumber(n) {
	if (n > maxInteger || n < minInteger) return `${n} não é permitido`;
	if (n < 0) putNumber(-n);
	return n;
}

console.log(putNumber(123456789));
console.log(putNumber(-123456789));
console.log(putNumber(0));
console.log(putNumber(42));
console.log(putNumber(maxInteger));
console.log(putNumber(maxInteger + 1));
console.log(putNumber(minInteger));
console.log(putNumber(minInteger - 1));
