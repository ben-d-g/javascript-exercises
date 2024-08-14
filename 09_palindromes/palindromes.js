const palindromes = function (word) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const cleanedString = word
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    for (let i = 0; i <= Math.floor(cleanedString.length / 2); i++){
        if (cleanedString[i].toLowerCase() != cleanedString[cleanedString.length - (1 + i)]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
