function naiveStringSearch(str, target) {
	let count = 0;

	for (let character of str) {
		if (character !== target[count]) {
			continue;
		}

		count++;

		if (count === target.length) {
			return count;
		}
	}
}

naiveStringSearch(
	"qweioqwneqwnepqweniqweniqwjneqonaqwwezzqnweioqwoqweqwela",
	"piazzola"
);

function bruteForceSearch(long, short) {
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) {
				break;
			}
		}
	}
}
