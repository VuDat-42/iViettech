"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var registerHandler = function() {
    //get values from controls
    var email = $("email").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var contact = "Text";
    if ($("email").checked) {
        contact = "Email";
    }
    if ($("none").checked) {
        contact = "None";
    }
    var terms = $("terms").checked;

    var isValid = true;

    //validate email
    if (email === "") {
        $("email").nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
        $("email").focus();
    } else {
        $("email").nextElementSibling.firstChild.nodeValue = "";
    }

    //validate phone
    if (phone === "") {
        $("phone").nextElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else if (isNaN(phone)) {
        $("phone").nextElementSibling.firstChild.nodeValue = 
            "The phone number must be number";
        isValid = false;
    } else {
        $("phone").nextElementSibling.firstChild.nodeValue = "";
    }

    //validate contry selection
    if (country === "") {
        $("country").nextElementSibling.firstChild.nodeValue = 
            "Please select a country";
        isValid = false;
    } else {
        $("country").nextElementSibling.firstChild.nodeValue = "";
    }

    //validate term
    if (terms == false) {
        $("terms").nextElementSibling.firstChild.nodeValue = 
            "This box must be checked.";
        isValid = false;
    } else {
        $("terms").nextElementSibling.firstChild.nodeValue = "";
    }

    //submit form
    if (isValid) {
        $("register_form").submit();
    }
};

//reset form function
var resetForm = function() {
    $("registration_form").reset();
    $("email").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";
    $("country").nextElementSibling.firstChild.nodeValue = "*";
    $("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email").focus();
}

window.onload = function() {
    $("register").onclick = registerHandler;
    $("reset_form").onclick = resetForm;
    $("email").focus();
}