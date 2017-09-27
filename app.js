// let elem = document.getElementById("randomRGB");

function getRandomNum() {
    // Math.random * (max - mix)  + min;
    let num = Math.floor(Math.random() * 255);
    return num
}

function rgbValues() {
    let rgbArr = [];
    
    while (rgbArr.length <= 2) {
        let tempElem = getRandomNum();
        rgbArr.push(tempElem);
    }
    console.log(rgbArr);
}

rgbValues();

