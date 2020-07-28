import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar/NavbarPage";
import Landing from "./Pages/Landing";
import ContactForm from "./Pages/SeccionContacto/ContactForm";
import FooterPage from "./components/Footer/FooterPage";



function App() {
  return (
    <>
      <Router>
      <NavbarPage />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contacto" component={ContactForm} />
            
            
        </Switch>
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
