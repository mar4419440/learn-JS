let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let n, a, ava, skill;

function showDetails(number) {
    ({
        title: n,
        age: a,
        available: ava,
        skills: [, skill],
    } = myFriends[number - 1]);
    console.log(n);
    console.log(a);
    console.log(ava ? "Available For Hiring" : "Not Available For Hiring");
    console.log(skill);
}
showDetails(chosen);
// // If chosen === 1

// "Osama"
// 39
//     "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
//     "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
//     "Available"
// "Laravel"