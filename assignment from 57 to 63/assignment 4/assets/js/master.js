function checkStatus(a, b, c) {
    if (typeof(a) == "number") {
        if (typeof(b) == "string") {
            if (typeof(c) == "boolean") {
                if (c == true) {
                    console.log(`hello ${b}, Your Age Is ${a} , You Are Available For Hire`);
                } else {
                    console.log(`hello ${b}, Your Age Is ${a} , You Are Not Available For Hire`);
                }
            }
        } else if (typeof(b) == "boolean") {
            if (b == true) {
                console.log(`hello ${c}, your Age Is ${c}, Your Are Available for hire`)
            } else {
                console.log(`hello ${c}, your Age Is ${c}, Your Are Not Available for hire`)
            }
        } else {
            console.log("unkown type of b")
        }
    } else if (typeof(a) == "string") {
        if (typeof(b) == "number") {
            if (typeof(c) == "boolean") {
                if (c == true) {
                    console.log(`hello ${a}, Your Age Is ${b} , You Are Available For Hire`);
                } else {
                    console.log(`hello ${a}, Your Age Is ${b} , You Are Not Available For Hire`);
                }
            }
        } else if (typeof(b) == "boolean") {
            if (b == true) {
                console.log(`hello ${a}, your Age Is ${b}, Your Are Available for hire`)
            } else {
                console.log(`hello ${a}, your Age Is ${b}, Your Are Not Available for hire`)
            }
        } else {
            console.log("unkown type of b")
        }

    } else if (typeof(a) == "boolean") {
        if (a == true) {
            if (typeof(b) == 'number') {
                console.log(`hello ${c}, your age is ${b}, you are avilabel for hire`);
            } else if (typeof(b) == 'string') {
                console.log(`hello ${b}, your age is ${c}, you are availabel for hire`);
            } else {
                console.log("unkown type of b")
            }
        } else {
            if (typeof(b) == 'number') {
                console.log(`hello ${c}, your age is ${b}, you are not avilabel for hire`);
            } else if (typeof(b) == 'string') {
                console.log(`hello ${b}, your age is ${c}, you are not availabel for hire`);
            } else {
                console.log("unkown type of b");
            }
        }
    } else {
        console.log("unkown type of a");
    }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"