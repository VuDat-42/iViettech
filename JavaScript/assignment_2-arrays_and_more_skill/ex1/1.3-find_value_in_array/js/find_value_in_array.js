var arrayInteger = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var findValue;
var arrayString = "";

for (var i = 0; i < arrayInteger.length; i++) {
    arrayString += arrayInteger[i] + ", ";
}

var isFoundValue = function(n, array) {
    var isFound = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            isFound = true;
        }
    }
    return isFound;
}

findValue = prompt("Enter the search value: ");

if (isFoundValue(findValue, arrayInteger)) {
    alert("Found " + findValue + " in the array [" + arrayString + "]");
} else {
    alert("Not found " + findValue + " in the array [" + arrayString + "]");
}