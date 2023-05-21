import React from 'react';
import { createRoot } from 'react-dom/client';

function FriendlyGreeting() {
    return (
        <p
            style={{
                fontSize: '1.25rem',
                textAlign: 'center',
                color: 'sienna',
            }}
        >
            Greetings, weary traveller!
        </p>
    );
}

const root1 = createRoot(document.querySelector('#root'));
root1.render(<FriendlyGreeting />);


// we can make this component 'reactive' by passing in a name argument
// if we don't know the name, use 'there' instead as a default value
function FriendlyGreeting({ name = 'there'}) {
    return (
      <p
        style={{
          fontSize: '1.25rem',
          textAlign: 'center',
          color: 'sienna',
        }}
      >
        
        Greetings, {name}!
      </p>
    );
  }
  
  const root2 = createRoot(document.querySelector('#root'));
  
  root2.render(
    <div>
      <FriendlyGreeting name="Josh" />
      <FriendlyGreeting name="Anita" />
      <FriendlyGreeting name="Rahul" />
    </div>
  );


// another example, drawing a horizontal line between sections
function HorizontalRule({ width = 100 }) {
    return (
      <div style={{ width }}>
        {/* Line-drawing stuff here */}
      </div>
    );
  }
  
  <HorizontalRule width={250} /> // 250px
  <HorizontalRule /> // 100px


// you don't need to use the defaultProps property anymore! simply pass the default prop
// in the function!