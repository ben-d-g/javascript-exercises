const removeFromArray = function(array, ...args) {
    //start with an empty array, add all items which are not in args
    let answer = [];
    for (const item of array){
        if (!(args.includes(item))){
            answer.push(item)
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
