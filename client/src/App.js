import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import store from "./store";
import { Header } from "./components";
import { Home } from "./pages";

const routes = [
  {
    exact: true,
    path: "/",
    children: <Home />
  }
];

const NoMatch = ({ location }) => (
  <div style={{ textAlign: "center", marginTop: "20%" }}>
    <h1>404 page</h1>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const App = () => {
  return (
    // <Provider>
    <Router>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route key={route} {...route} />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Router>
    // </Provider>
  );
};

export default App;