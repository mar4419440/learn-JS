let myString = "EElllzzzzzzzeroo";
let word = myString.split("").filter((el, index) => (myString.indexOf(el) === index)).join('');
console.log(word)
    // Elzero