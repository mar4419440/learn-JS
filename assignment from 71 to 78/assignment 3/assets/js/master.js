let myArray = ["E", "l", "z", ["e", "r"], "o"];
let arr = myArray.reduce((acc, current) => acc.concat(current), []).reduce((acc, current) => `${acc}${current}`);
console.log(arr);
// Elzero