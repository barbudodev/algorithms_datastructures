// arrays

// average temp for 5 first months
const averageTemp: number[] = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 38.5;
averageTemp[4] = 28.9;

// days of week
let daysOfWeek: string[] = [];
daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// array iteration
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// first 20 numbers of fibonacci sequence
const fibonacci: number[] = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

// adding numbers to an array

//@ts-ignore
const numbers: number[] = [0, 1, 2, 3, 4, 5];
numbers[numbers.length] = 6;

// using push
numbers.push(7);
numbers.push(8, 9, 10);

// adding element in first position
function insertFirstPosition<T>(array: T[], value: T): void {
  // Declare a function named "insertFirstPosition" that takes in two parameters:
  // 1. "array" - an array of type T (generic type)
  // 2. "value" - a value of type T (generic type)

  let i = array.length;
  // Declare a variable "i" and initialize it with the length of the array.
  // This will be used as an index to iterate through the array.

  while (i >= 0) {
    // Start a while loop that continues as long as "i" is greater than or equal to 0.

    array[i] = array[i - 1];
    // Assign the value of the element at index "i - 1" to the element at index "i".
    // This effectively shifts all elements in the array to the right by one position.

    i--;
    // Decrement the value of "i" by 1 in each iteration.
    // This moves the loop closer to the base case where "i" becomes -1 and the loop terminates.
  }

  array[0] = value;
  // Assign the value parameter to the first element of the array.
  // This effectively inserts the given value at the beginning of the array.
}

insertFirstPosition(numbers, -1);

// using unshift
numbers.unshift(-2);
numbers.unshift(-4, -3);

// removing from first position
//@ts-ignore
let i = 0;
while (i < numbers.length) {
  numbers[i] = numbers[i + 1];
  i++;
}

// @ts-ignore
Array.prototype.reIndex = function (myArray) {
  // Create an empty array to store the non-undefined elements.
  const newArray = [];
  // Declare a variable "i" and initialize it with 0.
  let i = 0;
  // Start a while loop that continues as long as "i" is less than the length of "myArray".
  while (i < myArray.length) {
    // Check if the element at index "i" is not undefined.
    if (myArray[i] !== undefined) {
      // @ts-ignore
      newArray.push(myArray[i]);
    }
    i++;
  }
  return newArray;
};

// remove from first position using reIndex
// @ts-ignore

// Add a new method to the Array prototype called "removeFirstPosition".
Array.prototype.removeFirstPosition = function () {
  let i = 0;
  // Start a while loop that continues as long as "i" is less than the length of the array.
  while (i < this.length) {
    // Move each element one position to the left,
    // effectively removing the element at the first position.
    this[i] = this[i + 1];
    i++;
  }
  // Return the array after removing the first position.
  return this.reIndex(this);
};

// bidimensional arrays
const avgTempDay1: number[] = [72, 75, 79, 79, 81, 81];
const avgTempDay2: number[] = [81, 79, 75, 75, 73, 72];
const avgTemp: number[][] = [avgTempDay1, avgTempDay2];

// iteration over bidimensional arrays
function printMatrix(matrix: number[][]): void {
  let row = 0;
  while (row < matrix.length) {
    let column = 0;
    while (column < matrix[row].length) {
      console.log(matrix[row][column]);
      column++;
    }
    row++;
  }
}

printMatrix(avgTemp);

// using multidimensional arrays
const matrix: number[][][] = [];

//@ts-ignore
let row = 0;
while (row < 3) {
  // Create an empty array at the current row index
  matrix[row] = [];
  let column = 0;
  while (column < 3) {
    // Create an empty array at the current column index within the current row
    matrix[row][column] = [];
    let depth = 0;
    while (depth < 3) {
      // Assign the sum of row, column, and depth to the current position within the 3D matrix
      matrix[row][column][depth] = row + column + depth;
      depth++;
    }
    column++;
  }
  row++;
}

//@ts-ignore
let row = 0;
while (row < 3) {
  matrix[row] = [];
  let column = 0;
  while (column < 3) {
    matrix[row][column] = [];
    let depth = 0;
    while (depth < 3) {
      matrix[row][column][depth] = row + column + depth;
      depth++;
    }
    column++;
  }
  row++;
}

//@ts-ignore
// Iterate over the elements of the 3D matrix
let row = 0;
while (row < matrix.length) {
  let column = 0;
  while (column < matrix[row].length) {
    let depth = 0;
    while (depth < matrix[row][column].length) {
      // Print the value at the current position within the 3D matrix
      console.log(matrix[row][column][depth]);
      depth++;
    }
    column++;
  }
  row++;
}

// joining multiple arrays
const zero: number = 0;
const positiveNumbers: number[] = [1, 2, 3];
const negativeNumbers: number[] = [-3, -2, -1];

//@ts-ignore
let numbers: number[] = negativeNumbers.concat(zero, positiveNumbers);

// iterating function to check if number is even
//@ts-ignore
function isEven(num: number): boolean {
  return num % 2 === 0;
}

//@ts-ignore
const isEven = (num: number): boolean => num % 2 === 0;

//@ts-ignore
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// iterando com every, some e forEach
numbers.every(isEven);
numbers.some(isEven);
numbers.forEach((x) => console.log(x % 2 === 0));

// using map and filter
const numbersMap = numbers.map(isEven);
const evenNumbers = numbers.filter(isEven);

// sum with reduce
numbers.reduce((previous, current) => previous + current);

// iteration with for
for (const n of numbers) {
  console.log(n);
} // 1 2 3 4 5 6 7 8 9 10

// using @@iterator object
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

for (const n of iterator) {
  console.log(n);
}

// using entries, keys and values
//@ts-ignore
let aEntries = numbers.entries();
console.log(aEntries.next().value); // [0, 1]
console.log(aEntries.next().value); // [1, 2]
console.log(aEntries.next().value); // [2, 3]

//@ts-ignore
let aEntries = numbers.entries();
for (const n of aEntries) {
  console.log(n);
}

const aKeys = numbers.keys();
console.log(aKeys.next()); // {value: 0, done: false}
console.log(aKeys.next()); // {value: 1, done: false}
console.log(aKeys.next()); // {value: 2, done: false}

const aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false}
console.log(aValues.next()); // {value: 2, done: false}
console.log(aValues.next()); // {value: 3, done: false}

// array.from
const numbers2 = Array.from(numbers);
const evens = Array.from(numbers, (x) => x % 2 === 0);

// array.of
const numbers3 = Array.of(1);
const numbers4 = Array.of(1, 2, 3, 4, 5, 6);

// array.fill
const numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
numbersCopy.fill(0); // [0, 0, 0, 0, 0, 0]
numbersCopy.fill(2, 1); // [0, 2, 2, 2, 2, 2]
numbersCopy.fill(1, 3, 5); // [0, 2, 2, 1, 1, 2]

const ones = Array(6).fill(1); // [1, 1, 1, 1, 1, 1]

// array.copyWithin
const copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3); // [4, 5, 6, 4, 5, 6]
copyArray.copyWithin(1, 3, 5); // [4, 4, 5, 4, 5, 6]

// sorting numbers
numbers.reverse(); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
numbers.sort(); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function compare(a: number, b: number) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

numbers.sort(compare); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// custom sorting
const friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];

function comparePerson(a: { age: number }, b: { age: number }) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }

  return 0;
}

// [{ name: 'Ana', age: 20 }, { name: 'Chris', age: 25 }, { name: 'John', age: 30 }]
friends.sort(comparePerson);

// sorting strings
const names = ["Ana", "ana", "john", "John", "Mark"];
names.sort(); // ['Ana', 'John', 'Mark', 'ana', 'john']

names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }

  return 0;
}); // ['Ana', 'ana', 'John', 'john', 'Mark']

names.sort((a, b) => a.localeCompare(b)); // ['Ana', 'ana', 'John', 'john', 'Mark']

// searching
numbers.indexOf(10); // 9
numbers.indexOf(100); // -1

numbers.push(10);
numbers.lastIndexOf(1); // 0
numbers.lastIndexOf(9); // 8

//@ts-ignore
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element: number, index: number, array: number[]) {
  return element % 13 === 0;
}

numbers.find(multipleOf13); // 13
numbers.findIndex(multipleOf13); // 12

// includes
numbers.includes(15); // true
numbers.includes(20); // false

//@ts-ignore
const numbers = [7, 8, 9, 6, 5, 4, 1, 2, 3];
numbers.includes(8, 5); // false
numbers.includes(2, 5); // true

// converting array to string
numbers.toString(); // '7,8,9,6,5,4,1,2,3'

// typed array
//@ts-ignore
const length = 5;
const int16 = new Int16Array(length);
const array16 = [];
array16.length = length;

// @ts-ignore
let i = 0;
while (i < length) {
  int16[i] = i + 1;
  // @ts-ignore
  array16[i] = i + 1;
  i++;
}

console.log(int16); // Int16Array(5) [1, 2, 3, 4, 5]
