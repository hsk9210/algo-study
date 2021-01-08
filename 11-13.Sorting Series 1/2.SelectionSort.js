/*
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

*/

function swap(array, i, j) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			console.log(array[j]);
			if (array[j] < array[minIndex]) {
				minIndex = j;
			}
		}
		swap(array, i, minIndex);
	}
	return array;
}

function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

selectionSort([2, 1, 5, 3, 7, 6]);
