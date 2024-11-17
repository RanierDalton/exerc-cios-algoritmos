function isDividable4Three(number){
    if(number % 3 == 0){
        return "divisível por 3"
    }

    return "não divisível por 3";
}

console.log(isDividable4Three(3));