## When to use objects

- When you don't need order
- When you need fast access / insertion and removal

### Big O of Objects

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

### Big O of Object Methods

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)

---

## When to use arrays

- When you need order

### Big O of Arrays

- Insertion - Depends
- Removal - Depends
- Searching - O(N)
- Access - O(1)

### Note

The problem occurs when we are trying to add or remove an item at index[0]

let names =["a", "b", "c"]

- "d" "a" "b" "c"
- ??? 000 111 222

Needs reindexing...

### Big O of Array Methods

- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N * logN)
- forEach/map/filter/reduce/etc. - O(N)
