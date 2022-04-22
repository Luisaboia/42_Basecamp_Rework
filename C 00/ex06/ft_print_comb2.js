const array = [];

function ft_print_comb2() {
	for (let i = 0; i <= 99; i++) {
		for (let j = 0; j <= 99; j++) {
			if (i < j) {
				if (i < 10 && j < 10) {
					array.push(`0${i} 0${j}`);
				} else if (i < 10) {
					array.push(`0${i} ${j}`);
				} else if (j < 10) {
					array.push(`${i} 0${j}`);
				} else {
					array.push(`${i} ${j}`);
				}
			}
		}
	}
	console.log(array);
}

ft_print_comb2();
