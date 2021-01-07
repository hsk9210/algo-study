function solution(numbers) {
	var answer = numbers
		.map((value) => value + "")
		.sort((a, b) => (b + a) * 1 - (a + b) * 1);
	// [6, 10, 2]; // [6102, 6210, 1062, 1026, 2610, 2106]

	return answer[0] === "0" ? "0" : answer;
}

// function solution(numbers) {
// 	var answer = numbers
// 		.map((v) => v + "")
// 		.sort((a, b) => (b + a) * 1 - (a + b) * 1)
// 		.join("");

// 	return answer[0] === "0" ? "0" : answer;
// }
