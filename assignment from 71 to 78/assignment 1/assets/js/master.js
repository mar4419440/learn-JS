let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let word = mix.map((el) => (isNaN(el) ? el : "")).reduce((acc, current) => `${acc}${current}`);
// Elzero
console.log(word);