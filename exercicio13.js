function sumOddNumbers(number){
    var result = 0;

    for(var i=number; i>=0; i--){
        if(i % 2 != 0){
            result += i;
        }
    }

    return result;
}

console.log(sumOddNumbers(15)); // 64
console.log(sumOddNumbers(5)); // 9
