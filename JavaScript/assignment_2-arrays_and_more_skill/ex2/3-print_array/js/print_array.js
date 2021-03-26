var twoDimensionArray = [];
var n = parseInt(prompt("Enter number of row: "));
var m = parseInt(prompt("Enter number of column: "));
var tDAString = "";

for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
        tDAString += prompt("Enter value at [" + i + "] [" + j + "]: ");
    }
}

for (var i = 0; i < n; i++) {
    tDAString += tDAString.substring(0, m) + "\n";
}

alert(tDAString);