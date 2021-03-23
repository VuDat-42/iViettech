var arrayInteger = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var arrayString = "";

for (var i = 0; i < arrayInteger.length; i++) {
    arrayString += arrayInteger[i] + ", ";
}

var sortArrayDescending = arrayInteger.sort(function(a, b) {
    return b-a
})

alert("Original array: [" + arrayString + "] \n" 
    + "Array after sort by descending: [" + sortArrayDescending + "]");