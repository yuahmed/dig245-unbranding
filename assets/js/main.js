
/* javascript */

let subText = document.querySelector("h1");
let bg = document.getElementById("bg");
let swoosh = document.getElementById("swoosh");
var bar = document.getElementById("bar");

//console.log(subText);

//message to tell user what to do to see transition
function infoMessage(message){
    alert(message);
}

subText.addEventListener("click",onClickHandler);

// handler function to transition upon click
function onClickHandler() {
    console.log(this.innerText);

    // changing background image
    //bg.style.backgroundSize = "1500px 800px";
    bg.style.backgroundImage = "url(assets/img/pollbg.png)";

    //changing tagline to subvert text
    this.innerText = "JUST POLLUTE IT.";
    this.style.color = "white";
    this.style.fontSize = "130%";

    //changing NIKE swoosh
    swoosh.style.backgroundImage = "url(assets/img/whiteswooshx.png)";
    swoosh.style.backgroundSize = "600px 500px";

    //show bar with links
    bar.style.display="block";
    
}
