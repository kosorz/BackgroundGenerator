var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
function setGradinet(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")" ;
    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradinet);
color2.addEventListener("input", setGradinet);


