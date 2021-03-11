var studentCode;
var studentName;
var studentAge;
var studentSex;
var displayStudent = "";
var exit;

do {
    studentCode = prompt("Enter student code: ");
    studentName = prompt("Enter student name: ");
    studentAge = prompt("Enter student age: ");
    studentSex = prompt("Enter student sex: "); 
    displayStudent += "Code: " + studentCode + " | Name: " + studentName + " | Age: " + studentAge + " | Sex: " + studentSex + "\n";

    exit = prompt("Do you want to continue?", "Press OK to continue, ESC or Cancel to exit");
} while (exit != null);

alert(displayStudent);