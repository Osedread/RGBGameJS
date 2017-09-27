/* jshint esversion: 6 */


// Cache DOM
let arr2 = Array.from(document.getElementsByClassName("color"));
let colorSpan = document.getElementById("randomRGB");
let result = document.getElementById("result");

// Function that returns a single number between 0 and 255
function getRandomNum() {
    // Math.random * (max - mix)  + min;
    let num = Math.floor(Math.random() * 256);
    return num;
}

// Function that fills an array with threee values 0-255 to build an RGB pattern
function rgbGenerator() {
    let rgbArr = [];
    while (rgbArr.length <= 2) {
        let tempElem = getRandomNum();
        rgbArr.push(tempElem);
    }
    return rgbArr;
}

// Fn that will return a string with the form 'rgb(X, Y, Z)'
// It needs to be pointed out that we are not adding the semicolon at the end of the string since when we insert it into the css we are changing the css value, not a string.
function rgbAssembler() {
    let arr = rgbGenerator();
    let num1 = arr[0];
    let num2 = arr[1];
    let num3 = arr[2];
    let randomRGB = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
    return randomRGB;
}

// Actual Fn of the game, where is gonna assign a rgb color to each div.
// It will display one of them to the user.
function game() {
    // First we empty the result DIV
    result.innerHTML = "";
    // We generate four random rgb colors that we should append to each div.color
    arr2.forEach((elem)=> {
        let value = rgbAssembler();
        elem.style.backgroundColor = value;
    });
    // Now we pick one of those divs and display it on the site.
    let x = Math.floor(Math.random() * 4);
    let randomColor = arr2[x].style.backgroundColor;
    colorSpan.innerHTML = randomColor;

}


window.addEventListener("click", (event)=> {
    let clickObj = event.target;
    let userChoice = event.target.style.backgroundColor;
    let compChoice = colorSpan.innerHTML;
    if (clickObj.className == "color") {
        if (userChoice === compChoice) {
            result.innerHTML = "<p>Congrats</p>";
            result.innerHTML += "<button id='reset' onclick='game()'>Reset</button>";
        } else {
            result.innerHTML = "It's not this one";
        }
    }
});

window.onload = ()=> game();

