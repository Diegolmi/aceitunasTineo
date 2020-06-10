import React from 'react';
import logo from '../src/assents/img/logoTineo1.svg';
import Navbar from '../src/components/Navbar/Navbar'
import 'mdbreact/dist/css/mdb.css';

import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Aceitunas<br />Tineo</h1>
        </p>
        
      </header>
    </div>
  );
}

export default App;
