// // 10-15

// 10
// 11
// 12
// 13
// 14
// 15


// // 20-10

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
let msg = window.prompt("Print Number From – To");
let msgString = msg.split("-");
let msgNum = [parseInt(msgString[0]), parseInt(msgString[1])];
console.log(msgNum);
if (msgNum[0] > msgNum[1]) {
    for (let i = msgNum[1]; i <= msgNum[0]; i++) {
        console.log(i);
    }
} else if (msgNum[0] < msgNum[1]) {
    for (let i = msgNum[0]; i <= msgNum[1]; i++) {
        console.log(i);
    }
} else {
    console.log("the two numbers are equal  please try again");
    location.reload();
}