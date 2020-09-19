import React from "react";
import { Routes, Route } from "react-router";
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
      <NavbarPage />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/productos/packchico" element={<DoyPackChico />} />
          <Route exact path="/productos/packgrande" element={<DoyPackGrande />} />
          <Route exact path="/productos/sachet" element={<Sachet />} />
          <Route exact path="/productos/frasco" element={<Frasco />} />
        </Routes>
        <FooterPage />
    </>
  );
}

export default App;
