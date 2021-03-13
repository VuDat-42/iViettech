var isPrimeNumber = function(n) {
    var isPrime = true;
    for (var i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

var result = "";
for(var j = 2; j <= 100; j++) {
    if (isPrimeNumber(j)) {
        result += " " + j;
    }
}

alert(result);