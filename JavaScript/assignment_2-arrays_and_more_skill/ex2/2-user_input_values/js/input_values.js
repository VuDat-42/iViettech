var twoDimensionArray = [];
var n = parseInt(prompt("Enter number of row: "));
var m = parseInt(prompt("Enter number of column: "));
var twoDimensionArrayString = "";

for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
        twoDimensionArrayString += prompt("Enter value at [" + i + "] [" + j + "]: ");
    }
}
