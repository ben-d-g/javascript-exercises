const repeatString = function(string, repeats) {
    if (repeats < 0){
        return "ERROR";
    }
    
    const temp = string;
    let answer = "";
    for (let i = 0; i < repeats; i++){
        answer = answer + temp;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
