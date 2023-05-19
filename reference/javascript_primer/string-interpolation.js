// STRING INTERPOLATION

// old way
const userName = 'Mai';
const oldDynamicString = 'hello ' + userName + '!';

// new way
const newDynamicString = `hello ${userName}!`;

// strings created with backticks (`) are known as template strings

const age = 7;
const className = `Next year, you'll be ${age + 1} years old.`;
console.log(className);