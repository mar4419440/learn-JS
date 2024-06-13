class Car {

    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return "Car is Running Now"
    }
    stop() {
        return "Car Is Stopping Now"
    }
}
let carOne = new Car("MG", "2022", "426983");
let carTwo = new Car("Opel", "2021", "445861");
let carThree = new Car("BMW", "2020", "987904");
// Needed Output
console.log(
    `Car One name is ${carOne.n} and its model is ${carOne.m} edition and its price is ${carOne.p} EGP`
);
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"