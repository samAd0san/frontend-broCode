// RANDOM NUMBER GENERATOR - ROLLING 3 DICE AT ONCE

// To get the element of html and perform operations on it we use 'getElementById'
const myButton = document.getElementById('btn'); // 'btn' is the id name specified in the html doc
const myLabel1 = document.getElementById('lb1'); // 'lb' is the id name specified in the html doc
const myLabel2 = document.getElementById('lb2');
const myLabel3 = document.getElementById('lb3');

const min = 1;
const max = 6;
let ranNum1;
let ranNum2;
let ranNum3;

myButton.onclick = () => {
    ranNum1 = Math.floor(Math.random() * max) + min;
    ranNum2 = Math.floor(Math.random() * max) + min;
    ranNum3 = Math.floor(Math.random() * max) + min;
    // textContent returns the text content of the element and all its descendants
    myLabel1.textContent = ranNum1;
    myLabel2.textContent = ranNum2;
    myLabel3.textContent = ranNum3;
}