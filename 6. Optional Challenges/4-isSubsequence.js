/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string from a subsequence of characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order chaanging.

*/

function isSubsequence(str1, str2) {
	let str1pointer = 0;
	let str2pointer = 0;

	while (str2pointer < str2.length) {
		if (str1[str1pointer] === str2[str2pointer]) {
			str1pointer++;
			if (str1pointer === str1.length) return true;
		}
		str2pointer++;
	}
	return false;
}

function isSubsequence(str1, str2) {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;
	if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
	return isSubsequence(str1, str2.slice(1));
}

function isSubsequence(strA, strB) {
	let a = 0;
	for (let b = 0; b < strB.length; b++) {
		if (!strA[a]) return true;
		if (strA[a] === strB[b]) a++;
	}
	if (a === strA.length) return true;
	return false;
}

isSubsequence("hello", "hello world"); // true;
isSubsequence("sing", "sting"); // true;
isSubsequence("abc", "abracadabra"); // true;
isSubsequence("abc", "acb");
