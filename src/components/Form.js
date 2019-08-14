import React from 'react'
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {latitude: '',
                    longitude: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      console.log(event.target)
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="formGroup">
          <label>Last Seen:</label><br />
            <div className="innerFormGroup">
              <label>Latitude:</label><input type="number" value={this.state.lslatitude} onChange={this.handleChange} name="latitude" placeholder="49.010234"/><br />
              <label>Longitude:</label><input type="number" value={this.state.lslongitude} onChange={this.handleChange} name="longitude" placeholder="-79.345231"/><br />
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