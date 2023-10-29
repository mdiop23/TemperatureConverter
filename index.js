"use strict"; 
 
window.onload = init; 
 
function init() { 
   const convertBtn = document.getElementById("convertBtn"); 
   convertBtn.onclick = onConvertBtnClicked;  
   const convert2Btn = document.getElementById("convert2Btn"); 
   convert2Btn.onclick = onConvert2BtnClicked
} 

function onConvertBtnClicked(){
    const fahrenheitField = document.getElementById("fahrenheitField");
let fahrenheit = Number(fahrenheitField.value);
var answer = parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(2)) 
const ansCelciusField = document.getElementById("ansCelciusField");
ansCelciusField.value = answer;}

function onConvert2BtnClicked(){
    const celciusField = document.getElementById("celciusField");
let celcius = Number(celciusField.value);
var answer = parseFloat(((9 / 5) * celcius + 32).toFixed(2))
const ansFahrenheitField = document.getElementById("ansFahrenheitField");
ansFahrenheitField.value = answer;}