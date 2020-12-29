function areThereDuplicates(...args) {
	args.sort((a, b) => {
		if (isNaN(a) && isNaN(b)) {
			return a.localeCompare(b);
		}
		return a - b;
	});

	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
