"use strict"

var $ = function(id) {
    return document.getElementById(id);
};

var calculateMPG = function (miles, gallon) {
    var result = miles / gallon;
    return result.toFixed(1);
}

var processEntry = function ()  {
    //get value from Form
    var miles = parseFloat($("mile").value);
    var gallon = parseFloat($("gallon").value);

    //validate
    if (isNaN(miles)) {
        alert("Error");
        return;
    }

    //calculate
    var result = calculateMPG(miles, gallon);

    $("result").value = result;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
};

