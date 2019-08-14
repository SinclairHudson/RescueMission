import React from 'react';
import './App.css';
import MapManagment from './components/MapManagement.js';
//import Map from './components/Map.js';
import Form from './components/Form.js';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
//blah

// tslint:disable-next-line:no-var-requires
const data = require('./heatmapData.json');
// tslint:disable-next-line:no-var-requires
const { token, styles } = require('./config.json');

const mapStyle = {
    flex: 1
};

const layerPaint = {
    'heatmap-weight': {
        property: 'priceIndicator',
        type: 'exponential',
        stops: [[0, 1], [5, 5]]
    },
    // Increase the heatmap color weight weight by zoom level
    // heatmap-ntensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': {
        stops: [[0, 1], [5, 5]]
    },
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0,
        'rgba(33,102,172,0.02)',
        5,
        'rgb(255,34,61)'
    ],
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': {
        stops: [[0, 1], [0, 400]]
    }
};
const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZHVkZW1hcmlvIiwiYSI6ImNqemJrazY0NDAwMzIzZW83bjk1cHg2Z28ifQ.bt7dJcCdaLah6Z_-ULJH1g'
});

function App() {
  return (
    <div className="App">
      <MapManagment />
        <div className={"formContainer"}>
        <Form/>
        </div>
        <div className={"mapContainer"}>
            <Map
                center={[ -78.52, 45.79 ]}
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '80vw'
                }}
            >
                <Layer type="heatmap" paint={layerPaint}>
                    {data.map((el, index) => (
                        <Feature key={index} coordinates={el.latlng} properties={el} />
                    ))}
                </Layer>
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[45.8372, 78.3791]} />
                </Layer>
            </Map>;
        </div>
    </div>
  );
}

export default App;
