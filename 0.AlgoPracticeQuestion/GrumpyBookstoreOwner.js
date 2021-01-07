/*
화난 책방 주인

오늘 책방 주인은 customers.length 분 만큼 가게를 열었습니다.
매 분마다, 특정한 숫자의 손님 (customers[i])가 가게를 들어오며, 그 분이 끝나면 모든 손님이 가게를 떠납니다.
가끔 몇분에서는, 책방 주인이 화가 나있습니다. 만약 i-th 분에 책방 주인이 화가 나있다면, grumpy[i] = 1 이고, 아니라면
grumpy[i] = 0 입니다. 책방 주인이 화가나있을때, 그 분에 모든 고객들은 만족하지 않으며, 화가 안나있을 때는 만족합니다.

책방 주인은 스스로를 x 분 연속으로 화나지 않게하는 비밀 기술을 알고있습니다만, 한번밖에 이 기술을 쓸 수 없습니다.

하루에 최대로 만족할 수 있는 손님의 수를 리턴하시오.
*/

var maxSatisfied = function (customers, grumpy, X) {
	let numSatisfied = 0;
	let maxNumSatisfied = 0;

	for (let i = 0; i < customers.length; i++) {
		if (grumpy[i] === 0) {
			numSatisfied += customers[i]; // ///
			customers[i] = i === 0 ? 0 : customers[i - 1]; // 스왑
			continue;
		}

		if (i > 0) {
			customers[i] += customers[i - 1];
		}

		let grumpySatisfied;

		if (X <= i) {
			// index
			grumpySatisfied = customers[i] - customers[i - X];
		} else {
			grumpySatisfied = customers[i];
		}

		maxNumSatisfied = Math.max(maxNumSatisfied, grumpySatisfied);
	}
	return maxNumSatisfied + numSatisfied;
};

/*
Example 1:

Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16

Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes.
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

let numSatisfied = 0;
if grumpy[i] === 0 {
  numSatisfied += customers[i]
}

if (X) {
  X--
}


*/
