/* my solution */
function countUniqueValues(arr) {
	const uniqueCounter = arr.reduce((a, c) => {
		// 원래는 a,c 두개 다른 인덱스로 시작할 예정이었으나...
		a[c] = (a[c] || 0) + 1; // 오잉? 그냥 이렇게 푸면 아닌가 해서...
		return a;
	}, {});

	return Object.keys(uniqueCounter).length;
}

/* my solution 2 */
// only works for sorted array
function countUniqueValues(arr) {
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
