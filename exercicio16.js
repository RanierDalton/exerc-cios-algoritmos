function sumPairNumbers(number){
    var result = 0;

    for(var i=number; i>=0; i--){
        if(i % 2 == 0){
            result += i;
        }
    }

    return result;
}

console.log(sumPairNumbers(15)); // 56
console.log(sumPairNumbers(5)); // 6