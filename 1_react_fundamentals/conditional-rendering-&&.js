// CONDITIONAL RENDERING WITH &&


// you can use if statements to conditionally render but it's a little awkward.
// an alternative approach is to use '&&'
// example:
function Friend({ name, isOnline }) {
    return (
        <li className="friend">
            {isOnline && <div classname="green-dot" />}
            {name}
        </li>
    );
}

function App() {
    return (
        <ul className="friend-list">
            <Friend name="Andrew" isOnline={false} />
            <Friend name="Beatrice" isOnline={true} />
            <Friend name="Chen" isOnline={true} />
        </ul>
    );
}

export default App

// && is a control flow operator which works a bit like if/else, except that it's an
// expression instead of a statement


// always use boolean values with &&
// another example:
function App() {
    const shoppingList = ['avocado', 'banana', 'cinnamon'];
    const numOfItems = shoppingList.length;
  
    return (
      <div>
        {numOfItems > 0 && (
          <ShoppingList items={shoppingList} />
        )}
      </div>
    );
  }