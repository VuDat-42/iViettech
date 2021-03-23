var arrayInteger = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var arrayString = "";

for (var i = 0; i < arrayInteger.length; i++) {
    arrayString += arrayInteger[i] + ", ";
}

var totalArray = function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

alert("Sum of all elements of array [" + arrayString + "] is: " + totalArray(arrayInteger));