// ARRAY ITERATION METHODS
// react doesn't provide any iteration helpers through JSX
// so we rely on the built-in methods that are part of javascript, like map and filter


// forEach ----------
// when we want to perform some action on every item in an array
// forEach takes a function as its argument. this is commonly known as a callback function
// the term refers to a function that we pass to another function
// example:
const pizzaToppings = [
    'cheese',
    'avocado',
    'halibut',
    'custard',
];

pizzaToppings.forEach((topping) => {
    console.log(topping);
});

// the callback we pass to forEach takes a second optional parameter
pizzaToppings.forEach((topping, index) => {
    console.log(index, topping);
});
// the index is the position in the array of the current item, starting from 0.


// filter ----------
// filter is similar to forEach in that it takes a callback function, and that callback function
// will be called once per item in the array.
// unlike forEach, filter produces a value. Specifically, it produces a new array which contains a subset of items from the original array.
// importantly, filter doesn't modify the original array.
// example:
const students = [
    { name: 'Aisha', grade: 89 },
    { name: 'Bruno', grade: 55 },
    { name: 'Carlos', grade: 68 },
    { name: 'Dacian', grade: 71 },
    { name: 'Esther', grade: 40 },
  ];
  
  const studentsWhoPassed = students.filter(student => {
    return student.grade >= 60
  });
  
  console.log(studentsWhoPassed);
  /*
    [
      { name: 'Aisha', grade: 89 },
      { name: 'Carlos', grade: 68 },
      { name: 'Dacian', grade: 71 },
    ]
  */

// another filter example:
const filterNums = [5, 12, 15, 31, 40];

const evenNums = filterNums.filter(num => {
    return num % 2 === 0;
});

console.log(filterNums);
console.log(evenNums);


// map ----------
// map is very similar to forEach. give it a callback function, it iterates over the array
// and calls the function once for each item in the array.
// the difference is that map produces a brand new array, full of transformed values
// in contrast, forEach always returns undefined
// like filter, map doesn't mutate the original array; it produces a brand-new array
// map is exactly like forEach except it saves whatever we return from the callback into a new array
// example:
const people = [
    { name: 'Aisha', grade: 89 },
    { name: 'Bruno', grade: 55 },
    { name: 'Carlos', grade: 68 },
    { name: 'Dacian', grade: 71 },
    { name: 'Esther', grade: 40 },
];

const screamedNames = people.map(person => {
    return person.name.toUpperCase();
});

console.log(screamedNames);

// we can also pass in the second optional parameter to access the curren item's index
const numberedNames = people.map((person, index) => {
    return `${index}-${person.name}`;
  });
  
  console.log(numberedNames);

// another map example
const mapNums = [1, 2, 3];

const result = mapNums.map(num => num + 1);

console.log(result);


// there are additional methods worth learning about as well: find, every and reduce, for eample.