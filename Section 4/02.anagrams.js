/*
Q: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another such as cinema, formed from iceman.
*/

/* Paul answer */

const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	let counter1 = {};
	let counter2 = {};

	for (let char of str1) {
		counter1[char] = (counter1[char] || 0) + 1;
	}

	for (let char of str2) {
		counter2[char] = (counter2[char] || 0) + 1;
	}

	for (let key in counter1) {
		console.log(key);
		if (!(key in counter1)) {
			return false;
		}
		if (counter2[key] !== counter1[key]) {
			return false;
		}
	}
	return true;
};

/* Harvy answer  */

const validAnagram = (one, two) => {
	let sortArrOne = one.split("").sort();
	let sortArrTwo = two.split("").sort();

	if(sortArrOne.length !== sortArrTwo.length) {
		return false;
	} 
	for(let i =0 ; i<sortArrOne.length ; i++) {
		if(sortArrOne[i] !== sortArrTwo[i]) {
			return false;
		}
	}
	return true;
}

/* solution */

const validAnagram = (first, second) => {
  if (first.length !== second.length) return false;

  const lookUp = {};

  for (let i = 0; i<first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  console.log(lookUp)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then its not a anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}


validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
