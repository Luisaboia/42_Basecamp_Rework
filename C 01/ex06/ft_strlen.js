function ft_strlen(str) {
	var i = 0;
	while (str[i]) i++;
	return i;
}

console.log(`Tamanho: ${ft_strlen("Hello world !")}`);
console.log(`Tamanho: ${ft_strlen("")}`);
console.log(`Tamanho: ${ft_strlen("a")}`);
console.log(`Tamanho: ${ft_strlen("abcdefghijklmnopqrstuvwxyz")}`);
console.log(
	`Tamanho: ${ft_strlen(
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	)}`
);
