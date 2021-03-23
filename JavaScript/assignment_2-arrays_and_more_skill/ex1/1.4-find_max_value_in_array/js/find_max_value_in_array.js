var arrayInteger = new Array(100, 200, 3, 4, 5, 6, 7, 8, 9, 10);
var findMaxValue;
var arrayString = "";

for (var i = 0; i < arrayInteger.length; i++) {
    arrayString += arrayInteger[i] + ", ";
}

// findMaxValue = Math.max.apply(Math, arrayInteger);

findMaxValue = function(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

alert("The max value in the array [" + arrayString + "] is: " + findMaxValue(arrayInteger));