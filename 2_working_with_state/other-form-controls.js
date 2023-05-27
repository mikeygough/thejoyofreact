// OTHER FORM CONTROLS

// form controls follow a pattern with react.

// 1. the current value is tracked using either 'value' (for most inputs)
    // or 'checked' (for checkboxes and radio buttons)

// 2. we respond to changes with the 'onChange' event listener


// select tag...
// allows the user to select a single option from a list of predefined options
import React from 'react';

function App() {
    const [selectedOption, setSelectedOption] = React.useState('red');

    return (
        <form>
            <fieldset>
                <legend>
                    What is your favorite color?
                </legend>

                <select
                    value={selectedOption}
                    onChange={event => {
                        setSelectedOption(event.target.value)
                    }}
                >
                    <option value="red">
                        Red
                    </option>
                    <option value="green">
                        Green
                    </option>
                    <option value="blue">
                        Blue
                    </option>
                </select>
            </fieldset>

            <p>
                Selected value:
                <br />
                {selectedOption}
            </p>
        </form>
    );
}


// radio buttons tag
// they serve the same purpose as select, they allow the user
// to select 1 choice from a group of options
function App() {
    const [
      value,
      setValue
    ] = React.useState('no');
  
    return (
      <form>
        <fieldset>
          <legend>Do you agree?</legend>
          
          <input
            type="radio"
            name="agreed-to-terms"
            id="agreed-yes"
            value="yes"
            checked={value === "yes"}
            onChange={event => {
              setValue(event.target.value)
            }}
          />
          {' '}
          <label htmlFor="agreed-yes">
            Yes
          </label>
          <br />
          
          <input
            type="radio"
            name="agreed-to-terms"
            id="agreed-no"
            value="no"
            checked={value === "no"}
            onChange={event => {
              setValue(event.target.value)
            }}
          />
          {' '}
          <label htmlFor="agreed-no">
            No
          </label>
        </fieldset>
      </form>
    );
  }

// breaking down this structure

// NAME: The browser needs to know that each button is part of the same group, 
// so that ticking one option will untick the others. 
// This is done through the name prop. 
// Each radio button in a group should share the same name.

// VALUE: Each radio button has its own value. 
// This property will be copied over to our React state 
// when the option is ticked. 
// This is the definition / meaning for each radio button.

// ID: like other form controls, this is needed so that the <label> 
// can be associated with the right input, 
// so that clicking the label focuses the input.

// CHECKED: This is the prop that binds a given radio button 
// to our React state, making it a controlled value. 
// It should be set to a boolean value: 
// true if it's ticked, false if it's not. 
// Only one radio button should be set to true at a time.



// for some ideas about when to use radio buttons versus drop-down menus,
// checkout this post: https://blog.prototypr.io/7-rules-of-using-radio-buttons-vs-drop-down-menus-fddf50d312d1