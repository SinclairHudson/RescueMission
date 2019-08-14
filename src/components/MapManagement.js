import React from 'react'
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
            </div>
        </div>
        );
      }
    }
  export default MapManagment