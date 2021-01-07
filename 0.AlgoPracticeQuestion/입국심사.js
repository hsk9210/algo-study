// 문제 설명
// n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

// 처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

// 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

// 입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
// 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
// 심사관은 1명 이상 100,000명 이하입니다.

function getTimeForProvisionary(n, times) {
	times.sort((a, b) => a - b); //

	let start = 1; // 최소 걸릴 수 있느 시간
	let end = n * times[times.length - 1]; //최대 걸릴 수 있는 시간
	let answer = end;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		let accumulator = 0;
		for (let time of times) {
			accumulator += Math.floor(mid / time);
			if (accumulator >= n) {
				answer = Math.min(mid, answer);
				return;
			}
		}

		//

		if (accumulator >= n) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return answer;
}

getTimeForProvisionary(6, [7, 10]); // 28

// n 이 0 이 될 때 까지 times 의 Array 를 looping 하며 수를 누적시켜야 한다,
// 배열의 각 원소를 통과할 때 마다 누적값에 arr[i] 를 추가해주며, n 은 -- 가 되어야한다.
// 각 원소를 통과하는 조건: 순서적으로 가장 적은 시간이 걸리는 심사관이 그 보다 더 오래걸리는 심사관보다 많은 심사를 진행해야한다.
// n 이 최종적으로 0 이 되면 누적 된 값을 리턴한다.

// getTimeForProvisionary()
