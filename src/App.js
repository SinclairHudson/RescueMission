import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">
        <div className={"formContainer"}>
        <Form/>
        </div>
        <div className={"mapContainer"}>
        <Map/>
        </div>
    </div>
  );
}

export default App;
