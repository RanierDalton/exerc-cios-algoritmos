function factorial(number){
    var result = 1;
    number = Math.abs(number);
    for(var i=number; i>=1; i--){
        result *= i;
    }
    return result;
}

console.log(factorial(2)); // 2
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720