function createSelectBox(startYear, endYear) {
    let body = document.querySelector("body");
    // Write Your Code Here
    for (i = startYear; i <= endYear; i++) {
        body.innerHTML += (`<option value="${i}">${i}</option>`);
    }
}
createSelectBox(2000, 2021);