function verifyNumber(number) {
    if(number > 0) {
        return "positivo";
    }

    if(number < 0){
        return "negativo";
    }

    return "zero";
}

console.log(verifyNumber(1));