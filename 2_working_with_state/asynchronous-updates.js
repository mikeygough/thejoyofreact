// ASYNCHRONOUS UPDATES

// keep in mind that state setters aren't immediate..

function App() {
    const [count, setCount] = React.useState(0);
  
    return (
      <>
        <p>
          You've clicked {count} times.
        </p>
        <button
          onClick={() => {
            // we need to set nextCount
            const nextCount = count + 1;
            // then call setCount
            setCount(nextCount);
  
            console.log(nextCount)
          }}
        >
          Click me!
        </button>
      </>
    );
  }