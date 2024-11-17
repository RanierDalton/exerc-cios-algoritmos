function repeatString(times, string){
    var result = "";
    for(var i=0; i<times;i++){
        result += string
    }

    return console.log(result);
}

repeatString(3,"b") // bbb
repeatString(3, "oi ") /// oi oi oi 