//Time: O(n)

function sameFrequency(int1, int2) {
	const arrInt1 = Array.from(String(int1), Number);
	const arrInt2 = Array.from(String(int2), Number);

	if (arrInt1.length !== arrInt2.length) return false;

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let i = 0; i < arrInt1.length; i++) {
		frequencyCounter1[arrInt1[i]] = (frequencyCounter1[arrInt1[i]] || 0) + 1;
		frequencyCounter2[arrInt2[i]] = (frequencyCounter2[arrInt2[i]] || 0) + 1;
	}

	for (let number in frequencyCounter1) {
		if (frequencyCounter1[number] !== frequencyCounter2[number]) return false;
	}

	return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);
