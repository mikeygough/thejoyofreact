// RANGE UTILITY

// say we want to generate 5 star icons for a review, for example. but the review is just an int.
// we can loop over an array using .map() but what happens if we don't have an array?

// one way is to use a for loop and create an array.
// but this must be done before the JSX since JSX doesn't support statements, only expressions.

function StarRating({ rating }) {
    let stars = [];
  
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img
          key={i}
          alt=""
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      );
    }
  
    return (
      <div className="star-wrapper">
        {stars}
      </div>
    );
  }


// perhaps a preferred alternative is to use the range function.
// it's not part of the javascript language, instead it lives in a utility library called Iodash.

// here's how it works...

// Create an array from 0 (inclusive) to 2 (exclusive):
range(2);
// Produces: [0, 1]

// Create an array from 0 (inclusive) to 5 (exclusive):
range(5);
// Produces: [0, 1, 2, 3, 4]

// Create an array from 2 (inclusive) to 6 (exclusive):
range(2, 6);
// Produces: [2, 3, 4, 5]

// Create an array from 2 to 10, picking every 2nd number
range(2, 10, 2);
// Produces: [2, 4, 6, 8


// using it we can refactor the above solution to be a little more elegant:
function StarRating({ rating }) {
    return (
      <div className="star-wrapper">
        {range(rating).map((num) => (
          <img
            key={num}
            alt=""
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        ))}
      </div>
    );
  }


// AN EASY WAY TO USE THIS RANGE FUNCTION IS JUST WRITE A utils.js FILE AND IMPORT
export const range = (start, end, step = 1) => {
    let output = [];
    
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    
    return output;
  };