function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let i = zName.trim().indexOf(" ");
        return `${zName.slice(0, i)} ${zName
            .slice(i + 1, i + 2)
            .toUpperCase()}.`;
        // Ahmed ali => Ahmed A.
    }

    function ageWithMessage(zAge) {
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
        return `${zAge.slice(0,2)}`;
    }

    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In 
        return `${zCountry.toUpperCase().slice(0,2)}`;
    }

    function fullDetails() {
        return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)},You Live In ${countryTwoLetters(zCountry)}`;
        // Write Your Code Here
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY