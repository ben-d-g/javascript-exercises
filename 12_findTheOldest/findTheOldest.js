const findTheOldest = function(people) {
    people.forEach(person => {
        if (!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear();
        }
    });
    let peopleSorted = people.sort((a,b) => {
        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)){
            return 1;
        }
        else{
            return -1;
        }
    });
    return peopleSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
