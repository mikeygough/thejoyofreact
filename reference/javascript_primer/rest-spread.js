// REST / SPREAD

/* 

rest and spread do opposite things.
'rest' will gather up a bunch of individual values
'spread' will unpack a set of gathered values

*/ 


// REST

// example:

function addNums(...nums) {
    let sum = 0;

    nums.forEach(num => {
        sum += num;
    });

    return sum;
}

addNums(1, 10, 100, 1000, 10000);

// this '...nums' syntax is rest.
// nums is a single parameter that will gather all other parameters into an array


// another example:

function logArgs(...args) {
    console.log(args);
}

logArgs(1, 2, "hi!");
// logs [1, 2, 'hi']

// another example (rest parameter + other parameters)

function removeFirstArg(first, ...rest) {
    return rest;
}

removeFirstArg(1, 2, 3, 4);
// products [2, 3, 4]

/* 

there are some RULES
1. You're only allowed to have a single rest parameter
2. The rest parameter has to come last

*/ 

// these are invalid examples:

function nope(...firstRest, ...rest) {}
function notAllowed(...rest, second, third) {}


// SPREAD

// example:

function createDate(year, month, day) {
    return new Date(year, month, day);
}

const myDateInfo = [2020, 01, 01];

createDate(...myDateInfo);

// we 'unpack' myDateInfo so that it provides 3 individual arguments, rather than a single array argument.
// equivalent to:

createDate(
    myDateInfo[0],
    myDateInfo[1],
    myDateInfo[2])


// some additional examples

// copying arrays
const myArray = [1, 2, 3, 4];
const arrayCopy = [...myArray];
console.log(arrayCopy); // [1, 2, 3, 4]
console.log(myArray === arrayCopy); // false. different arrays


// merge two arrays
const myNumbers = [1, 2, 3];
const yourNumbers = [4, 5, 6];
const ourNumbers = [...myNumbers, ...yourNumbers];
console.log(ourNumbers); // [1, 2, 3, 4, 5, 6]
