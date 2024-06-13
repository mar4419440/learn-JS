let num1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

if (num1 == str) {
    console.log(`${num1} is the same Value as ${str}`);
}
if (num1 == str && typeof(num1) !== typeof(str)) {
    console.log(`${num1} Is the same Value as ${str} but not of the same type`);
}
if (str == str && typeof str === typeof str2) {
    console.log(`${str} is the same type of ${str2} but not the Same Value `)
}