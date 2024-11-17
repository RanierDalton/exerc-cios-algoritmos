var vogais = ['a','e','i','o','u'];

function howMuchVogals(text){
    var counter = 0;
    text = text.toLowerCase();

    for(var i=0; i<text.length;i++){
        if(vogais.includes(text[i])){
            counter++;
        }
    }

    return counter;
}

console.log(howMuchVogals("oi, eu sou o goku")); // 9 vogais