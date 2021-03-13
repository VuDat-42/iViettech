var firstNumber = 0;
var secondNumber = 1;
var fibonaci = "";

for (let i = 0; i < 10; i++) {   
    fibonaci += firstNumber + " " + secondNumber + " ";
    firstNumber = firstNumber + secondNumber;
    secondNumber = secondNumber + firstNumber;
}

alert("First 20 numbers of Fibonacci numbers: \n" + fibonaci);