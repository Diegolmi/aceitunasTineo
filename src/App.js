import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarPage from "./components/Navbar/NavbarPage";
import Landing from "./Pages/Landing";
import ContactForm from "./Pages/SeccionContacto/ContactForm";


function App() {
  return (
    <>
      <NavbarPage />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contacto" component={ContactForm} />
            
            
        </Switch>
      </Router>
    </>
  );
}

export default App;
