// TRUTHY AND FALSY
// in javascript, every value is either truthy or falsy. 
// a truthy value is one that counts as true when it comes to conditions

// most values in javascript are truthy except for the following falsy values:

false
null
undefined
'' // every string other than '' is truthy
0
NaN


// Converting to Boolean
// sometimes it's beneficial to convert a truthy value into true,
// or a falsy value into false

// the declarative way
Boolean(4); // true
Boolean(0); // false
Boolean([]); // true... [] and {} are truthy
Boolean(''); // false

// the other, more-common, way to convert to a boolean
!!4; // true
!!0; // false
!![]; // true
!!''; // false


// note that !! isn't actually a javascript operator.
// it's not repeating the NOT operator (!) twise
// we can use ! to flip a boolean value
!true; // false
!false; // true

// if we use ! with a non-boolean value, it will flip its truthy value
!4; // false, since 4 is truthy
!0; // true, since 0 is falsy

// you can stack multiple ! operators to flip it back and forth
!4; // false
!!4; // true
!!!4; // false
!!!!4; // true