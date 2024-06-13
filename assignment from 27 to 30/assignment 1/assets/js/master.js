let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.toLowerCase().slice(0, 1)); // e
console.log(userName.toLowerCase().substring(0, 1)); // e
console.log(userName.toLowerCase().substring(-5, 1)); // e
console.log(userName.toLowerCase().substr(0, 1)); // e
console.log(userName.toLowerCase().slice(0, 1).repeat(3)); // eee