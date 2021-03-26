// Write a program to accept two integer numbers n and m then:
//1. Declare a 2 dimension array with n rows and m column.

var n = parseInt(prompt("Enter number of row: "));
var m = parseInt(prompt("Enter number of column: "));

var integerArray = new Array(n);
for (var i = 0; i < integerArray.length; i++) {
    integerArray[i] = new Array(m);
}

//2. Write a function to permit user enter the values for elements of array.

var input2DArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            array[i][j] = prompt("Enter value at [" + i + "] [" + j + "]: ");
        };
    };
};

//3. Write another function to print all the elements of array to screen.

var print2DArray = function (array) {
    var result = "";
    for (var i = 0; i < array.length; i++) { 
        for (var j = 0; j < array[i].length; j++) {
            result += (array[i][j] + "  ");
        };
        result += "\n";
    }
    alert("Print array: \n" + result);
};

//4. Write a function to calculate the total of elements of array.

var sum2DArray = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) { 
        for(var j = 0; j < array[i].length; j++) {
            sum += parseInt(array[i][j]);
        }; 
    };
    alert("Sum of array: " + sum);
};

//5. Write a function to enter a number and then check it is exist in array or not. 

var searchNumber = function(array) {
    var findValue = (prompt("Enter the number want to find: "));
    var isFind = false;
    for (var i = 0; i < array.length; i++) { 
        for (var j = 0; j < array[i].length; j++) {
            if (findValue == array[i][j]) {
                isFind = true;
            }
        };
    }
    if (isFind) {
        alert("Found " + findValue + " in the array");
    } else {
        alert("Not found " + findValue + " in the array");
    }
};

//6. Write a method to sort the elements of this array by ascending.

var sortArray = function (array) { 
    for (var i = 0 in array) {
        array[i].sort(function(a, b) {return a-b});
    };
    print2DArray(array);
}

//7. Setup a menu for this program.

var programArray = function(array){
    input2DArray(array);
    var index = parseInt(prompt("Enter Number:\n 1. Print array.\n 2. Total of array.\n 3. Find a number\n 4. Sort array by ascending."));
    switch (index) {
        case 1:
            print2DArray(array);
            break;
        case 2:
            sum2DArray(array);
            break;
        case 3:
            searchNumber(array);
            break; 
        case 4:
            sortArray(array);
            break;
    }
}
window.onload = programArray(integerArray);