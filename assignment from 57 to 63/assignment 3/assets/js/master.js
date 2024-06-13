function ageInTime(theAge) {
    let ageInMonth = 0;
    let ageInWeek = 0;
    let ageInDays = 0;
    if (theAge > 10 && theAge < 100) {
        ageInMonth = theAge * 12;
        ageInWeek = theAge * (365 / 7);
        ageInDays = theAge * 365;
        console.log(`the age in years is ${theAge} \nthe age in months is ${ageInMonth} \nthe age in weeks is ${ageInWeek}\nthe age in days is ${ageInDays} `)
    } else {
        console.log("Age Out Of Range");
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months