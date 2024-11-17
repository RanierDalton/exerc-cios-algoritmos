function greatest(first, second, third){
    if(first > second && first > third){
        return first;
    }

    if(second > first && second > third){
        return second;
    }

    return third
}

console.log(greatest(1,2,3)); // 3
console.log(greatest(4,2,3)); // 4
console.log(greatest(1,5,3)); // 5