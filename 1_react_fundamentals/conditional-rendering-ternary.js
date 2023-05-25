// CONDITIONAL RENDERING WITH &&
// && is a great replacement for if statements, what if we want if/else?


// example, return one view if user logged in, another if not.
function App({ user }) {
    const isLoggedIn = !!user;

    return (
        <>
            {isLoggedIn
                ? <AdminDashboard />
                : <p>Please login first</p>}
        </>
    );
}


// the ternary operator consists of three parts:
// condition ? firstExpression : secondExpression
// if condition is truthy, the first expression will be the one that gets evaluated.
// if it's falsy, the second expression will be evaluated instead.