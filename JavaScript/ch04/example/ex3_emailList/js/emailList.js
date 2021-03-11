"use strict"

var $ = function(id) {
  return document.getElementById(id);
}

var processEntry = function () {
  //get value from form
  var email = $("email").value;
  var email2 = $("email2").value;
  var firstName = $("firstName").value;
  var isValid = true;

  // validate data
  if (email == "") {
    isValid = false;
    $("emailError").firstChild.nodeValue = "This field is required";
  } else {
    $("emailError").firstChild.nodeValue = "";
  }

  if (email2 == "") {
    isValid = false;
    $("email2Error").firstChild.nodeValue = "This field is required";
  } else {
    if (email2 != email) {
      $("email2Error").firstChild.nodeValue = "This field must be same with first";
    } else {
      $("email2Error").firstChild.nodeValue = "";
    }
  }

  //submit form
  if (isValid) {
    $("emailList").submit();
  }
};

window.onload = function () {
  $("joinList").onclick = processEntry;
}