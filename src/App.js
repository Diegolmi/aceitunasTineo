import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar/NavbarPage";
import Landing from "./Pages/Landing";
import FooterPage from "./components/Footer/FooterPage";
import DoyPackChico from "./Pages/Productos/DoyPackChico";
import DoyPackGrande from "./Pages/Productos/DoyPackGrande";
import Sachet from './Pages/Productos/Sachet';
import Frasco from "./Pages/Productos/Frasco";



function App() {
  return (
    <>
      <Router>
      <NavbarPage />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/productos/packchico" component={DoyPackChico} />
          <Route exact path="/productos/packgrande" component={DoyPackGrande} />
          <Route exact path="/productos/sachet" component={Sachet} />
          <Route exact path="/productos/frasco" component={Frasco} />
        </Switch>
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
