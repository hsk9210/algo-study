let array = [4, 2, 3, 7, 1, 21];

function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length - 1; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(array, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	console.timeEnd("bubblesort");
	return arr;
}

function swap(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

bubbleSort(array);
console.log(array);
