var arrayInteger = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var findValue;

var isFoundValue = function(n, arrayInteger) {
    var isFound = false;
    for (var i = 0; i < arrayInteger.length; i++) {
        if (arrayInteger[i] == n) {
            isFound = true;
        }
    }
    return isFound;
}

findValue = prompt("Enter the search value: ");

if (isFoundValue(findValue, arrayInteger)) {
    alert("Found");
} else {
    alert("Not found");
}