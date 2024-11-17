function verifyNumber(number){
    if(number >= 0 && number % 2 == 0){
        return "positivo e par";
    }

    return "negativo ou ímpar";
}

console.log(verifyNumber(2));
console.log(verifyNumber(3));
console.log(verifyNumber(-2));
