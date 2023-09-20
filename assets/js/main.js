
/* javascript */

// 1 - This is just a test
console.log("Hello from main.js");

// 2 - Store a reference to the target element
let subText = document.querySelector("h1");
var swoosh = document.getElementById("bg");

// 3 - Log the reference to confirm it works
console.log(subText);

// 4 - Add a mouseover event listener
subText.addEventListener("mouseover", mouseoverHandler);

// 5 - Create a handler function to run code when the event happens
function mouseoverHandler() {
    console.log(this.innerText);
    //this.bswoosh.style.backgroundImage = "url(i.natgeofe.com/n/87d0e2f0-4583-4f6c-8a31-1766d41725a8/plastic-waste-single-use-worldwide-consumption-art-4a.jpg)";

    // swoosh.style.backgroundSize = "1500px 800px";
    this.innerText = "JUST POLLUTE IT.";
    this.style.backgroundColor = "red";
    swoosh.style.backgroundImage = "url(assets/img/pollbg.svg)";

    this.style = "cursor: wait"; // 7 - Update the cursor style
}

// 6 - An event listener and handler in the same statement
subText.addEventListener("mouseout", function () {
    this.innerText = "JUST DO IT.";
    swoosh.style.backgroundColor = "white";
    // swoosh.style.backgroundImage = "url(assets/img/blackswooshx.png)";
    // swoosh.style.backgroundSize = "600px 600px";
    this.style = "cursor: pointer";
});