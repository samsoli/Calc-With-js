var display = document.getElementById("display");
var btnClear = document.getElementById("btn-clear");
var btnClrlastAct = document.getElementById("btn-ClrlastAct");
var btnBackspace = document.getElementById("btn-backspace");
var btnDiv = document.getElementById("btn-div");
var btnMul = document.getElementById("btn-mul");
var btnMinus = document.getElementById("btn-minus");
var btnPlus = document.getElementById("btn-plus");
var btnSign = document.getElementById("btn-sign");
var btnPoint = document.getElementById("btn-point");
var btnEquls = document.getElementById("btn-equls");

var btnNumbers = document.querySelectorAll('.number')

var vpoint = false;
var num1, num2;
var opt = "";
var result;

btnClear.addEventListener('click', (e) => {
    display.textContent = "0";
    vpoint = false;
    num1=0;
    num2=0;
});
btnClrlastAct.addEventListener('click',(e)=>{
    display.textContent="0";
})

btnBackspace.addEventListener('click', (e) => {
    var len = display.textContent.length;
    var lastdigit = display.textContent.substring(len - 1, len);
    if (lastdigit == ".") {
        vpoint = false;
    }


    if (len > 1) {
        display.textContent = display.textContent.substring(0, len - 1);
    } else {
        display.textContent = "0";
    }
})

btnNumbers.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (display.textContent == "0") {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }

    })
})
btnPoint.addEventListener('click', (e) => {
    if (vpoint == false) {
        display.textContent += "."
        vpoint = true;
    }
})

btnPlus.addEventListener('click', (e) => {
    num1 = Number(display.textContent);
    display.textContent = "0";
    opt = "+";
})
btnMinus.addEventListener('click', (e) => {
    num1 = Number(display.textContent);
    display.textContent = "0";
    opt = "-";
})
btnMul.addEventListener('click', (e) => {
    num1 = Number(display.textContent);
    display.textContent = "0";
    opt = "*";
})
btnDiv.addEventListener('click', (e) => {
    num1 = Number(display.textContent);
    display.textContent = "0";
    opt = "/";
})
btnEquls.addEventListener('click', (e) => {
    num2 = Number(display.textContent);
    switch (opt) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    display.textContent = result;
})