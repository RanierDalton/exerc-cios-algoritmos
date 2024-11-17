function calculate(first, second){
    if(first >= second){
        return first - second;
    }

    return first + second;
}

console.log(calculate(5,1)); // 4
console.log(calculate(5, 6)); // 11
