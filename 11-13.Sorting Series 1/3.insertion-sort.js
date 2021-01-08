/*
Psuedocode

* start by picking the second element in the array
* now compare the second with the one before it and swap if necessary
* continue to the next element and if its in the incorrect order, iterate thrtough the second position(left side) to place the element in the correct place.

*/

const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		let tmp = arr[i];
		while (j >= 0 && arr[j] > tmp) {
			arr[j + 1] = arr[j];
			console.log(j, arr);
			j--;
		}
		arr[j + 1] = tmp;
		console.log(`${i} round complete`, arr);
	}
	return arr;
};

insertionSort([2, 1, 9, 89, 4]);
