function averagePair(arr, avg) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let pairAvg = (arr[left] + arr[right]) / 2;
		if (pairAvg === avg) return true;
		if (pairAvg < avg) {
			left++;
		} else {
			right--;
		}
	}
	return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
