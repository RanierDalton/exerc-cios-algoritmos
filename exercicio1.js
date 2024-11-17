function greatest(first, second){
    if(first < second){
        return second;
    } 
    
    if(first == second) {
        return undefined;
    }
 
    return first;
}

console.log(greatest(1,2));