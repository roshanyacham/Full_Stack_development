//map()

//Map function  is used to create a new array by 
// applying a function to each element of an existing 
// array. It does not change the original array but returns 
// a new array where each element is the result of the 
// function applied to the corresponding element in the 
// original array.

//Example1

let numbers = [1, 2, 3]
let newNumbers = numbers.map(num => num + 1)
console.log(newNumbers)

//Example2

let numbers1 = [1, 2, 3]
let multiplied = numbers1.map(num => num * 10)
console.log(multiplied)


//Example3

let names = ['john', 'paul', 'george']
let uppercaseNames = names.map(name => name.toUpperCase())
console.log(uppercaseNames)


//reduce()

//The reduce() method excutes a reducer function for array element
//reduce() method return a single value
//reduce() method does not execute the function for empty array elements
//reduce() method does not change the orginal array



//Example1

let numbers2 = [1, 2, 3]
let sum = numbers.reduce((total, num) => total + num, 0)
console.log(sum)


//Example2

let words = ['cat', 'elephant', 'dog']
let longestWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, '')
console.log(longestWord)


// filter()

//filter() method creates a new array filled with elements that pass a test provided by a function
//filter() method does not execute the function for empty elements
//filter() method does not chage the orginal array

//Example1

let ages = [32, 33, 16, 40]
let result = ages.filter(checkAdult)

function checkAdult(age) {
  return age >= 18
}
console.log(result)

//Example2

let words1 = ['cat', 'dog', 'elephant'];
let longWords = words1.filter(word => word.length > 3);
console.log(longWords);

//Example3

let numbers3 = [1, 2, 3, 4];
let greaterThanTwo = numbers3.filter(num => num > 2);
console.log(greaterThanTwo);
