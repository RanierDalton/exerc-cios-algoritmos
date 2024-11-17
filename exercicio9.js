function isPrime(number){
    for(var i=2; i<number; i++){
        if(number % i == 0){
            return "não primo";
        }
    }

    return "primo";
}

console.log(isPrime(2)); // primo

console.log(isPrime(3)); // primo

console.log(isPrime(4)); // não

console.log(isPrime(43)); // primo