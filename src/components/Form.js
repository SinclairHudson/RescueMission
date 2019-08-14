import React from 'react'
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.callback)
      this.state = {latitude: '',
                    longitude: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    handleSubmit(event) {
      this.props.callback(this.state);
      alert(JSON.stringify(this.state));
      console.log("sending")
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="formGroup">
          <label>Last Seen:</label><br />
            <div className="innerFormGroup">
              <label>Latitude:</label><input type="number" value={this.state.latitude} onChange={this.handleChange} name="latitude" placeholder="49.010234"/><br />
              <label>Longitude:</label><input type="number" value={this.state.longitude} onChange={this.handleChange} name="longitude" placeholder="-79.345231"/><br />
              <br />
              Time: <input type="time" value={this.state.lstime} onChange={this.handleChange} name="longitude"/><br />
            </div>
          </div>
          <div className="formGroup">
          Travel Speed: <input type="number" value={this.state.lslongitude} onChange={this.handleChange} name="longitude" placeholder="5"/><br />
          </div>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Form