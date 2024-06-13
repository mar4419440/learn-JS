// Test Case 1
let numone = 9; // "009"
if (numone < 10) {
    console.log(`00${numone}`);
}
// Test Case 2
let numtwo = 20; // "020"
if (numtwo < 100 && numtwo > 10) {
    console.log(`0${numtwo}`);
}
// Test Case 3
let numthree = 110; // "110"
if (numthree >= 100) {
    console.log(`${numthree}`);
}