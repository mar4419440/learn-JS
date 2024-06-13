function sayHello(theName = "unkown", theGender = "unkown") {
    if (theGender.toUpperCase() == "MALE") {
        console.log(`hello: MR.${theName}`);
    } else if (theGender.toUpperCase() == "FEMALE") {
        console.log(`hello: MS.${theName}`);
    } else {
        console.log(`hello: ya ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"