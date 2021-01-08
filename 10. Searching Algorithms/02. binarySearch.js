/*
Write a function called binarySearch which accepts a sorted array and a valyue and returns the index at which the value exists. Otherwise return -1.

*/

function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((right + left) / 2);

	while (left <= right) {
		if (val === arr[mid]) return mid;
		if (val === arr[left]) return left;
		if (val === arr[right]) return right;

		if (val > arr[mid]) {
			left = ++mid;
		} else {
			right = --mid;
		}
		mid = Math.floor((start + end) / 2);
	}
	return -1;
}
