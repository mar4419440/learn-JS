let start = 10;
let end = 100;
let exclude = 40;
let x = start - start
    // Output
    // 10
    // 20
    // 30
    // 50
    // 60
    // 70
    // 80
    // 90
    // 100
for (let i = 0; i < 10; i++) {
    start = start + start;
    if (start === exclude) {
        continue;
    } else {
        console.log(start);
    }
}