var arrayInteger = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var arrayString = "";

for (var i = 0; i < arrayInteger.length; i++) {
    arrayString += arrayInteger[i] + " ";
}

alert(arrayString);