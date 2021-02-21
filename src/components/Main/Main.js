import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>You are on the about page</p>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>You are home</p>
    </div>
  );
};

const NoMatch = () => {
  return (
    <div>
      <h1>404</h1>
      <p>No Match</p>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export {Main}