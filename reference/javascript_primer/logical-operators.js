// LOGICAL OPERATORS
// AND operator (&&) and OR operator (||)

// example:
const isLoggedIn = true;
const userRole = 'administrator';

if (ifLoggedIn && userRole === 'administrator') {
    // only runs if both true
}


// these operators also act as CONTROL FLOW OPERATORS
// example;
const myAge = 35;
const result = myAge < 50 && myAge;
// evaluates to 35
// in this situation, the && operator isn't designed to produce a boolean value.
// it's designed to resolve to one of the expressions on either side of the operator
// think of && like a gate. move through the gate if the left-hand side is truthy

// another example:
const numOfChildren = 4;
const parkingHasBeenValidated = true;
const signatureOnWaiver = '';

const oldAdmissionTicket =
    numOfChildren &&
    parkingHasBeenValidated &&
    signatureOnWaiver &&
    generateTicket();

// since numOfChildren and parkingHasBeenValidated are truthy but signatureOnWaiver
// is falsy (''), oldAdmissionTicket is set to ''.
// if one of the expressions before an && operator evaluates to a falsy value,
// then the rest of the expressions are skipped.
// here, the generateTicket() function is never called

// the exact same code written using if/else instead of logical operators looks like this:
let newAdmissionTicket;

if (!numOfChildren) {
  newAdmissionTicket = numOfChildren;
} else if (!parkingHasBeenValidated) {
  newAdmissionTicket = parkingHasBeenValidated;
} else if (!signatureOnWaiver) {
  newAdmissionTicket = signatureOnWaiver;
} else {
  newAdmissionTicket = generateTicket();
}

// another example:
if (false) {
    console.log("I will never run");
}


// the OR operator
// the || operator is exactly like the && operator with one key difference
// || doesn't stop and provide the first falsy value. it stops and provides
// the first truthy value.
// example:
const userImageSrc = null;
const teamImageSrc = null;
const defaultImageSrc = '/images/cat.jpg';

const oldSrc = userImageSrc || teamImageSrc || defaultImageSrc;

// we check the first expression, userImageSrc, which is null. Because it's falsy, the || gate is unlocked, and we proceed onwards.
// the second expression, teamImageSrc, is also null, and so the second || gate unlocks.
// when we make it to the final item, the final item is provided regardless of whether it's truthy or falsy. And so src will be assigned to defaultImageSrc.

// the same code written using if/else looks like this:
let newSrc;

if (userImageSrc) {
  newSrc = userImageSrc;
} else if (teamImageSrc) {
  newSrc = teamImageSrc;
} else {
  newSrc = defaultImageSrc;
}