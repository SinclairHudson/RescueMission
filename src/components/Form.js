import React from 'react'

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
          <label>
            Last Seen:<br />
            Latitude: <input type="text" value={this.state.lslatitude} onChange={this.handleChange} name="latitude" placeholder="49.010234"/><br />
            Longitude: <input type="text" value={this.state.lslongitude} onChange={this.handleChange} name="longitude" placeholder="-79.345231"/><br />
            <br />
            Time: <input type="time" value={this.state.lstime} onChange={this.handleChange} name="longitude"/><br />
          
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Form