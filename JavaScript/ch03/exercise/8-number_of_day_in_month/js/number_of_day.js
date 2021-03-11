var n = parseInt(prompt("Enter a month of the year: ")); 
var currentYear = new  Date();
currentYear = parseInt(currentYear.getFullYear());

var leapYear = function(currentYear) {
    if ((currentYear % 4 === 0 && currentYear % 100 !== 0 && currentYear % 400 !== 0) || 
        (currentYear % 100 === 0 && currentYear % 400 === 0)) {
            return alert("February has 29 days");
        } else {
            return alert("February has 28 days");
        }
};

if (isNaN(n) || n < 1 || n > 12) {
    alert("The month is invalid");
} else {
    switch (n) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Month " + n + " has 31 days");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Month " + n + " has 30 days");
            break;
        case 2:
            leapYear(currentYear);
            break;
    }
}
