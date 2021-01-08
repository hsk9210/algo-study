var characterReplacement = function (s, k) {
	let numConsecutive = 0;

	for (let i = 0; i < s.length; i++) {
		if (!k && s[i] !== s[i - 1]) {
			// 만약 더 이상 남아있는 k 가 없고 현재 숫자가 이전의 숫자와 다르다면, 현재 있는 연속값과 기존에 있는 연속값중 큰 수가 연속값이 된다.
			let currentNumConsecutive = i + 1;
			numConsecutive = Math.max(numConsecutive, currentNumConsecutive);
		}

		//조건문 하나를 더 넣어줘야함. k++

		if (s[i] !== s[i - 1]) {
			//만약 이전값과 현재값이 다르다면 k를 하나 소모시켜주고 현재값을 이전값으로 변경한다.
			s[i] = s[i - 1];
			k--;
		}
	}
	return numConsecutive;
};

let s = "AABABBA",

//