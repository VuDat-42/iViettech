//1. Create an integer array with 10 elements and the fill the data for this array.

var integerArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//2. Write a function to print all member of array to screen

var printArray = function(arrayName) {
    alert("Print the array:\n [" + arrayName.toString() + "]");
}

//3. Write a function to permit user enter a value and find this is exits in array or not.

var searchValue = function (arrayName) {
var value = parseInt(prompt("Enter the value to search: "));
var isFound = arrayName.includes(value);
    if(isFound) {
        alert("Found " + value + " in the array [" + arrayName.toString() + "]");
    } else{
        alert("Not found " + value + " in the array [" + arrayName.toString() + "]");
    };
};

//4. Write a function to find the maximum value in this array.

findMaxValue = function(array) {
    var max = array[0];
    for (var i = 1 in array) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    alert("The maximun value is: " + max);
}

//5. Write a function to calculate sum of all elements of array.

var totalArray = function(array) {
    var total = 0;
    for (var i = 0 in array) {
        total += array[i];
    }
    alert("Sum of array: " + total);
}

//6. Write a function to sort all elements of array by descending

var sortArrayDescending = function(array) {
    array = array.sort(function(a, b) {return b-a});
    printArray(array);
}

//7. Setup a menu to permit user enter a number to select to run a function. 
var processArray = function(arrayName){
    var index = parseInt(prompt("Enter number: \n 1. Print array \n 2. Search a value \n 3. Find maximum value \n 4. Sum of array. \n 5. Sort array by descending"));
    switch(index){
        case 1:
            printArray(arrayName);
            break;
        case 2:
            searchValue(arrayName);
            break;
        case 3:
            findMaxValue(arrayName);
            break;
        case 4:
            totalArray(arrayName);
            break; 
        case 5: 
            sortArrayDescending(arrayName);
            break;
    };
};
window.onload = processArray(integerArray);