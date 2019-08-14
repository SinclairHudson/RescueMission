import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Map/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
