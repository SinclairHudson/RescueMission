import React from 'react'
import Map from './Map.js';
import Form from './Form.js';

class MapManagment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    callback(data) {
        console.log(data)
        this.setState(data)
    }
    render() {
        return (
        <div>
            <div className={"formContainer"}>
            <Form callback={this.callback.bind(this)}/>
            </div>
            <div className={"mapContainer"}>
            <Map formData={this.state}/>
            </div>
        </div>
        );
      }
    }
  export default MapManagment