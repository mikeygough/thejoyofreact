// THE useState HOOK

// click the button and watch the count increase
import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Value: {count}
        </button>
    );
}

export default Counter;


// whenever we have 'dynamic' values we want to keep track of, we use React state.
// state is used for values that change over time

// to create a state variable, utilize the useState function. it takes a single argumenet: the initial value.
// in this case, that value initializes to 0.

// useState is a hook, a special type of function that allows us to 'hook into' React internals.

// useState returns an array containing two items.
// 1. the current value of the state variable. ours is called 'count'.
// 2. a function we can use to update the state variable. ours is called 'setCount'.

// it's customary to follow the "x, setX" structure for this array destructuring.
// example:

const [user, setUser] = React.useState();
const [errorMessage, setErrorMessage] = React.useState();
const [flowerBouquet, setFlowerBouquet] = React.useState();

// the first destructured variable is the name of the thing we're tracking
// the second is a function that can be called to change the thing.
// ^ this is sometimes called a 'setter function'.


// INITIAL VALUE
// we can set our initial value to be anything, including a function...
// example:
const [count, setCount] = React.useState(() => {
    return 1 + 1;
});


