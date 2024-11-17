function isMultiple(first, second){
    if(second % first == 0){
        return "múltiplo";
    }

    return "não múltiplo";
}

console.log(isMultiple(1,5)); // sim

console.log(isMultiple(5,1)); // não