import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/about" exact>
          <About></About>
        </Route>
        <Route path="/users" exact>
          <Users></Users>
        </Route>
      </Switch>
    </Router>
  );
}

// Components that return HTML or JSX are called functinal components
function Home() {
  return <h1>Hello Home</h1>;
}

function About() {
  return <h1>Hello About</h1>;
}

function Users() {
  return <h1>Hello Users</h1>;
}
