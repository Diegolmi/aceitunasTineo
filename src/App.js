import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar/NavbarPage";
import Landing from "./Pages/Landing";
import FooterPage from "./components/Footer/FooterPage";
import Productos from "./Pages/Productos/Productos";




function App() {
  return (
    <>
      <Router>
      <NavbarPage />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/productos" component={Productos} />
        </Switch>
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
