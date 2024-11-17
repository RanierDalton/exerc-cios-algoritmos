function isNear(fisrt, second){
    var diff = Math.abs(fisrt - second);

    if(diff <= 5){
        return "próximos";
    }

    return "distantes";
}

console.log(isNear(-2,1)); // sim
console.log(isNear(10,5)); // sim

console.log(isNear(5,15)); // não
console.log(isNear(-10,5)); // não