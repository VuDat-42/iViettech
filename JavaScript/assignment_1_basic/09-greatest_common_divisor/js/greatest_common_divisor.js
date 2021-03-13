var a;
var b;
var greatestCommonDivisor = 0;

a = parseInt(prompt("Enter number a: "));
while(isNaN(a)) {
    a = parseInt(prompt("a is not a number. Try again: "));
} 

b = parseInt(prompt("Enter number b: "));
while(isNaN(b)) {
    b = parseInt(prompt("b is not a number. Try again: "));
} 

var intGreatestCommonDivisor = function(a, b) {    
    var half = (Math.max(a, b)) / 2;

    for (var i = 1; i <= half; i++) {
        if (a % i == 0 && b % i == 0) {
            greatestCommonDivisor = i;
        }
    }
    return greatestCommonDivisor;
}

if (a == 0 && b == 0) {
    alert("Greatest Common Divisor (" + a + ", " + b + "): " + greatestCommonDivisor);
} else if (a == 0 || b == 0) {
    greatestCommonDivisor = a + b;
    alert("Greatest Common Divisor (" + a + ", " + b + "): " + greatestCommonDivisor);
} else {
    greatestCommonDivisor = intGreatestCommonDivisor(a, b);
    alert("Greatest Common Divisor (" + a + ", " + b + "): " + greatestCommonDivisor);
}