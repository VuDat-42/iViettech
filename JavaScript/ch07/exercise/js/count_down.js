"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var processEntries = function() {
    //get data from entries
    var event = $("event").value;
    var dt = $("date").value;
    var message = $("message").firstChild;

    //make sure the name and date are entered
    if (event.length == 0 || dt.length == 0) {
        message.nodeValue = "Please enter both a name and a date.";
        return;
    }

    //make sure date string has slashes and 4 digit year
    if (dt.indexOf("/") == -1) {
        message.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        return;
    }
};

window.onload = function() {
    $("countdown").onclick = processEntries;
    $("event").focus();
};