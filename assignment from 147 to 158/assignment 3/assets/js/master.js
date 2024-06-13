// Edit The Class
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    fullData() {
        this.#c = this.#c
            .toString()
            .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
        // $1 stands for group number 1 and $2 for group number 2 and so on...

        // Another Way to Change to the number to credit card format
        // this.#c = this.#c.toString().match(/\d{4}/g).join("-");

        return `Hello ${this.u}, Your Credit Card Number is ${this.#c}`;
    }
    get showData() {
        // Getter is used to get the value of the method [fullData()] and use it as a property
        // To read more about getters and setters, check this link
        // https://www.programiz.com/javascript/getter-setter
        return this.fullData();
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined