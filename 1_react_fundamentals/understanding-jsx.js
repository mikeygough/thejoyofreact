// JSX is a cleaner way of creating react elements

import React from 'react';
import { createRoot } from 'react-dom/client';

// instead of writing React.createElement, we use an HTML-like syntax to create React elements.

// here's an example using plain javascript
const element1 = React.createElement(
    "nav",
    { id: "main-nav" },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "/" },
          "Home"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "/archives" },
          "Archives"
        )
      )
    )
  );

// here's the same sample in JSX
const element2 = (
    <nav id="main-nav">
      <ul>
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/archives">
            Archives
          </a>
        </li>
      </ul>
    </nav>
  );

// the thing is, JavaScript engines don't understand JSX, they only understand JavaScript.
// so we need to compile this JSX into JavaScript
// this is most commonly done using a tool like Babel.