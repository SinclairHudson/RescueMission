import React from 'react'
import mapboxgl from "mapbox-gl";
import data from '../data.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHVkZW1hcmlvIiwiYSI6ImNqemJrazY0NDAwMzIzZW83bjk1cHg2Z28ifQ.bt7dJcCdaLah6Z_-ULJH1g';

const options = [{
    name: 'Population',
    description: 'Estimated total population',
    property: 'pop_est',
    stops: [
        [0, '#f8d5cc'],
        [1000000, '#f4bfb6'],
        [5000000, '#f1a8a5'],
        [10000000, '#ee8f9a'],
        [50000000, '#ec739b'],
        [100000000, '#dd5ca8'],
        [250000000, '#c44cc0'],
        [500000000, '#9f43d7'],
        [1000000000, '#6e40e6']
    ]
}, {
    name: 'GDP',
    description: 'Estimate total GDP in millions of dollars',
    property: 'gdp_md_est',
    stops: [
        [0, '#f8d5cc'],
        [1000, '#f4bfb6'],
        [5000, '#f1a8a5'],
        [10000, '#ee8f9a'],
        [50000, '#ec739b'],
        [100000, '#dd5ca8'],
        [250000, '#c44cc0'],
        [5000000, '#9f43d7'],
        [10000000, '#6e40e6']
    ]
}];

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: options[0]
        };
    }
    componentDidUpdate() {
        this.setFill();
    }
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [5, 34],
            zoom: 1.5
        });

        this.map.on('load', () => {
            this.map.addSource('countries', {
                type: 'geojson',
                data
            });

            this.map.addLayer({
                id: 'countries',
                type: 'fill',
                source: 'countries'
            }, 'country-label-lg'); // ID metches `mapbox/streets-v9`

            this.setFill();
        });
    }
    setFill() {
        const { property, stops } = this.state.active;
        this.map.setPaintProperty('countries', 'fill-color', {
            property,
            stops
        });
    }
        

    render() {
        const { name, description, stops, property } = this.state.active;
        const renderLegendKeys = (stop, i) => {
            return (
                <div key={i}>
                    <span/>
                    <span>{`${stop[0].toLocaleString()}`}</span>
                </div>
            );
        };

        const renderOptions = (option, i) => {
            return (
                <label key={i}>
                    <input onChange={() => this.setState({ active: options[i] })} checked={option.property === property} name="toggle" type="radio" />
                    <div>{option.name}</div>
                </label>
            );
        };
        return (
            <div>
                <div ref={el => this.mapContainer = el}/>
                <div>
                    {options.map(renderOptions)}
                </div>
                <div>
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    {stops.map(renderLegendKeys)}
                </div>
            </div>
        );
    }
}
export default Map;