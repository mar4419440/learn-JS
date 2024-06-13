let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j = 1;
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
for (let i = 0; i < friends.length; i++) {

    if (friends[i].includes(letter) && !(friends[i].startsWith(letter))) {
        console.log(`${j}=>${friends[i]}`);
        j = j + 1;
    }
}