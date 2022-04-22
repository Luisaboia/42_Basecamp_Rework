function ft_sort_int_tab() {
	let ary = [2, 1, 0.4, 2, 0.4, 0.2, 1.5, 1, 1.1, 1.3, 1.2, 0.2, 0.4, 0.9];
	console.log(
		ary.sort(function (a, b) {
			return a - b;
		})
	);
}

ft_sort_int_tab();
