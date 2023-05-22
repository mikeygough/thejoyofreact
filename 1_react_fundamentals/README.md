most react apps share a common structure. in this example,
that structure consists of index.js, App.js and Header.js.

1. Index
responsible for rendering our react application, turning the react elements into live DOM nodes. in general, there is only one spot in the codebase which calls the CreateRoot and render methods. that's here!

because it's more of a setup file we typically don't want to render a bunch of JSX here.

this file generally only renders a single element: <App />

2. App
this is the homebase react components, almost all other components should be able to trace their lineage to App. sometimes it will manage core layout stuff like headers and footers but not usually.

if using a routing solution such as React Router, top-level routes are then included in this file.

the important thing is that App should be a home base for developers to check and get acquantiated with how things work.

3. Modules
use the ES module system to split your app into multiple files. 