function ft_putstr(str) {
	for (let i = 0; i < str.length; i++) {
		process.stdout.write(str[i]);
	}
}

ft_putstr("Hello world !");
