var a;
var b;
var c;
var x1;
var x2;
var delta;

a = parseFloat(prompt("Enter number a: "));
while (isNaN(a) || a == 0) {
    a = parseFloat(prompt("a must be a number and a different 0. Please re-enter:"));
}

b = parseFloat(prompt("Enter number b: "));
while (isNaN(b)) {
    b = parseFloat(prompt("b must be a number. Please re-enter:"));
}

c = parseFloat(prompt("Enter number c: "));
while (isNaN(c)) {
    c = parseFloat(prompt("c must be a number. Please re-enter:"));
}

delta = (Math.pow(b, 2)) - (4 * a * c);

if (delta < 0) {
    alert("The equation has no solution");
} else if (delta == 0) {
    x1 = -b / 2 *a;
    alert("Equation has double solutions: x1 = x2 = " + x1);
} else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Equation has two distinct solutions: \n x1 = " + x1 + "\n x2 = " + x2);
}