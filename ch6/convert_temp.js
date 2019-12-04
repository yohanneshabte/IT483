"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("degrees_computed").style.background = "lightgray";
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};
function convertTemp() {
    if($("to_celsius").checked)
        if(isNumber($("degrees_entered").value)) {
            var far = parseFloat($("degrees_entered").value);
            var celsius = Math.round((far-32)*5/9);
            $("degrees_computed").value = celsius;
        } else
            alert("You must enter a valid number for degrees");
    else
        if(isNumber($("degrees_computed").value)) {
            var celsius= parseFloat($("degrees_computed").value);
            var far = Math.round(celsius*9/5+32);
            $("degrees_entered").value = far;
        } else
            alert("You must enter a valid number for degrees");
}
function toFahrenheit() {
    $("degrees_entered").disabled = true;
    $("degrees_computed").disabled = false;
    $("degrees_entered").style.background = "lightgray";
    $("degrees_computed").style.background = "white";
    clearTextBoxes();  
    $("degrees_computed").focus();
}
function toCelsius() {
    $("degrees_computed").disabled = true;
    $("degrees_entered").disabled = false;
    $("degrees_computed").style.background = "lightgray";
    $("degrees_entered").style.background = "white";
    clearTextBoxes();
    $("degrees_entered").focus();
}
function isNumber(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0); 
}