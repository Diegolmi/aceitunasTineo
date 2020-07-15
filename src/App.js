import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar/NavbarPage";
import Landing from "./Pages/Landing";

function App() {
  return (
    <>
      <NavbarPage />
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
