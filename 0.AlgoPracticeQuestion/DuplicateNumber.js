function findDuplicate(nums) {
	let obj = {}; //<- number == O(n)
	for (let number of nums) {
		obj[number] = (obj[number] || 0) + 1;
		if (obj[number] > 1) {
			return number;
		}
	}
	return null;
}

function findDuplicate(nums) {
	nums.sort();
	console.log(nums);
	let j = 1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[j]) return nums[i];
	}
}

findDuplicate([3, 1, 3, 4, 2]);
