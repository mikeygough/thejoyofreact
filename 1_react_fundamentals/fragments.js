// FRAGMENTS
// to return multiple html elements from a react component, we use fragments.
// a fragment is a special react component that does not produce a DOM node.
// an example looks like this...

import React from 'react';

function App() {
    return (
        <React.Fragment>
            <h1>Welcome to my homepage!</h1>
            <p>Don't forget to sign the guestbook!</p>
            </React.Fragment>
    );
}

export default App;


// there's also a shorthand way to write this
return (
    <>
        <h1>Welcome to my homepage!</h1>
        <p>Don't forget to sign the guestbook!</p>
    </>
);


// either way, the JSX will compile to the exact same javascript...
React.createElement(
    React.Fragment,
    {}
    // children here
);