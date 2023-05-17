

// SELECTING NODES -----
// grab the <body> tag:
const body = document.querySelector('body');

// more prescise examples:
const enabledButton =
  document.querySelector('button:not(:disabled)');

const thirdNavLink =
  document.querySelector('.nav-link:nth-of-type(3)');

// you don't have to call it on 'document'
// Grab the header
const header = document.querySelector('#header');

// Find the first `<a>` tag inside the header
const firstLink = header.querySelector('a');
//                ^^^^^^ header, not document!

// NOTE that querySelector will grab the very first element it finds.
// querySelectorAll will collect an array-like object of all the matched elements.
// if querySelector can't find a matching element, it'll return null.


// EDITING NODES -----
// to change a class attribute, use the setAttribute method
const node = document.querySelector('#user-andrew');

node.setAttribute('class', 'online');

// to change the text within an element, use the innerText property;
node.innerText = 'Andrew (online)';


// CREATING AND APPENDING NODES -----
// to create a new node, call createElement which takes one argument (the tag to be created)
const element = document.createElement('div');
// then add some styling and content!
element.setAttribute('style', 'color: red;');
element.innerText = "Hello world!";
// finally, attach it somewhere with the appendChild method!
const body = document.querySelector('body');
body.appendChild(element);

// NOTE that createElement can only be called on the document object.


// DESTROYING NODES -----
// you can destroy a node using the remove method
const elem = document.querySelector('#some-element');
elem.remove();