const fibonacci = function(n) {
    if (n < 0){
        return "OOPS";
    }
    else{
        if (n === 0 || n === 1){
            return n;
        }
        else if(n === "0"){
            return 0;
        }
        else{
            let fibs = [0, 1]
            while (fibs.length <= n){
                fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
            }
            return fibs[fibs.length - 1]
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
