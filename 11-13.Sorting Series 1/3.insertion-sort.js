/*
Psuedocode

* start by picking the second element in the array
* now compare the second with the one before it and swap if necessary
* continue to the next element and if its in the incorrect order, iterate thrtough the second position(left side) to place the element in the correct place.

*/
function swap(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

function insertionSort(arr) {
	// compare the second elem with the one before and swap if necessary
	if (arr[1] < arr[0]) {
		swap(arr, 0, 1);
	}

	// start by picking the second elem in the array
	for (let i = 1; i < arr.length - 1; i++) {
		if (arr[i + 1] < arr[i]) {
			// iterate through sorted portion
			for (let j = 0; j < i + 1; j++) {
				// insert an element, where it belongs
				if (arr[j] > arr[i + 1]) {
					swap(arr, j, i + 1);
				}
			}
		}
	}

	return arr;
}

insertionSort([2, 1, 9, 89, 4]);
// cv;               j  i
// j;

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			for (let j = 0; j < i + 1; j++) {
				if (arr[j] > arr[i + 1]) {
					[arr[j], arr[i + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}
	}
	return arr;
}
