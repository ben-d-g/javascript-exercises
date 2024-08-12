const sumAll = function(...args) {
    //validate input
    for (const item of args){
        if (!(Number.isInteger(item))){
            return "ERROR";
        }
        if (item < 0){
            return "ERROR";
        }
    }

    //calculate answer
    let answer = 0;
    for (let i = Math.min(...args); i <= Math.max(...args); i++){
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
