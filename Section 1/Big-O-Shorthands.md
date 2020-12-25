# Big O Shorthands

## General Rules

---

1. Arithmetic operations are constant (+, -, etc )
2. Variable assignment is constant
3. Accessing elemeents in an array(by index) or object(by key) is constant
4. In a loop, the coplxity is the length of the loop times of the complexity of whatever happens inside the loop

### Examples

---

```js
// O(n)
// # of Operations dependent on n
function logAtLeast5(n) {
	for (let i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

// O(1)
// Regardless of N, the function is limited to max of 5
function logAtMost5(n) {
	for (let i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}
```

## Space Complexity

---

_Definition: Amount of Memory that's taken up in Big O_

**Rule of Thumbs**

1. Most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)

Examples:

```Js
// O(1)
function sum(arr) {
	let total = 0; // one number
	for (let i = 0; i < arr.length; i++ ) {
		//another number on variable assignment
		total += arr[i];
	}
	return total;
}


// O(n)
function double(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
		// gets longer in proportion to number of elements in arr
	}
	return newArr;
}
```

## Logarithms

---

### Logarithms is inverse of exponential

- Log2(8) = 3 -> 2^3 = 8

- log2(value) = exponent

### We'll omit the 2

- log === log2

## Summary

---

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a a high level understanding of the time or space complxity of an algorithm
- Big ONotation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complxity (as Measured by Big O) depends only on the algorithm, not the hardware used
