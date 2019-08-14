import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Map from './components/Map.js';
import Form from './components/Form.js';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';


const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZHVkZW1hcmlvIiwiYSI6ImNqemJrazY0NDAwMzIzZW83bjk1cHg2Z28ifQ.bt7dJcCdaLah6Z_-ULJH1g'
});

function App() {
  return (
    <div className="App">
        <div className={"formContainer"}>
        <Form/>
        </div>
        <div className={"mapContainer"}>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>;
        </div>
    </div>
  );
}

export default App;
