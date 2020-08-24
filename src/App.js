import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar/NavbarPage";
import Landing from "./Pages/Landing";
import FooterPage from "./components/Footer/FooterPage";
import DoyPackChico from "./Pages/Productos/DoyPackChico";




function App() {
  return (
    <>
      <Router>
      <NavbarPage />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/productos" component={DoyPackChico} />
        </Switch>
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
