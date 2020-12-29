/*
숫자로 이루어진 배열이 주어졌을 때, 중복된 값을 지우고 각 원소들이 한번씩 보이게 하며, 이 길이를 리턴하시오.
다른 배열을 통해서 만들지 말고 주어진 배열을 그대로 수정해야 합니다.

*/

var removeDuplicates = function (nums) {
	if (nums.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < nums.length; j++) {
		if (nums[j] !== nums[i]) {
			i++;
			nums[i] = nums[j];
		}
	}
	return i + 1;
};

/*




var removeDuplicates = function (nums) {
	// for loop

	let duplicate;
	for (let i = 0; i < nums.length; i++) {
		if (!duplicate || duplicate !== nums[i]) {
			duplicate = nums[i];
		} else {
			nums.splice(i, 1);
		}

		// duplicate !== nums[i]
		// duplicate = nums [i]
		// duplicate === nums[i]
	}
	return nums.length;
};

/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, w
ith the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.


Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.

nums is sorted in ascending order. 오름차순으로 정렬 되어 있다.

*/
