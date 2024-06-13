let div = document.createElement("div");
div.style.cssText = "position: absloute; top: 50%;left: 50%; transform:translate(-50%,-50%); width: 500px; height:100px; background-color:#ddd;  display: flex;justify-content: center; align-items: center; align-content: center; flex-wrap:wrap;"
div.innerHTML = 10;
document.body.append(div);

let counter = setInterval(() => {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") window.open("https://elzero.org/", "_blank", "width:100,height:100");
    if (div.innerHTML === "0") clearInterval(counter);
}, 1000);