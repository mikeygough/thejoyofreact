import React from 'react';

function SearchForm() {
    const [searchTerm, setSearchTerm] = React.useState('cats!');

    return (
        <>
            <form>
                <label htmlFor="search-input">
                    Search:
                </label>
                <input
                    type="text"
                    id="search-input"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
            </form>

            <p>
                Search term: {searchTerm}
            </p>
        </>
    );
}

// when we set the value attribute on a form control,
// we tell react that it should be a controlled element.
// this is a specific term which means that react is managing the input
// by contrast, if we don't set value the input is an uncontrolled element.
// AN ELEMENT SHOULD ALWAYS EITHER BE CONTROLLED OR UNCONTROLLED

// to avoid the console warning from react about switching from 
// controlled and uncontrolled values, ALWAYS MAKE SURE YOU'RE PASSING
// A DEFINED VALUE WHEN YOU INITIALIZE STATE

// another form example:

function SearchForm({ runSearch }) {
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <form
            className = "search-form"
            onSubmit = {event => {
                event.preventDefault();
                runSearch(searchTerm);
            }}
        >
            <input
                type="text"
                value={searchTerm}
                onChange={event => {
                    setSearchTerm(event.target.value);
                }}
            />
            <button>
                Search!
            </button>
        </form>
    );
}


// it's preferred to use forms when collecting user data
// as opposed to a button with with an event handler
// one of the reason is we get client-side validation.

// one quirk is that we need to prevent the default submission behavior
// which is basically legacy stuff from when the web just used to be a bunch
// of linked html files.
// by overiding this with 'event.preventDefault()' we stop the browser
// from executing a full page reload.
