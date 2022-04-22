// Inviável, não existem ponteiros em javascript.
// Tentei simulando o máximo do comportamento de um ponteiro.

let nbr = { n: 0 };

function ft_ultimate_ft(nbr) {
	nbr.n = 42;
	return nbr.n;
}

console.log(`nbr padrão: ${nbr.n}`);
console.log(`nbr modificado: ${ft_ultimate_ft(nbr)}`);
