const color = {};

// Assigning the key: value pair to an object
color.black = "\x1b[30m";
color.red = "\x1b[31m";
color.green = "\x1b[32m";
color.yellow = "\x1b[33m";
color.blue = "\x1b[34m";
color.magenta = "\x1b[35m";
color.cyan = "\x1b[36m";
color.white = "\x1b[37m";

console.log(color.red + " Elzero" + color.green + " web " + "%cSchool", "background-color: blue; coloe:white;");