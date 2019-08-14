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
            <input type="text" value={this.state.latitude} onChange={this.handleChange} name="latitude" placeholder="Latitude"/>
            <input type="text" value={this.state.longitude} onChange={this.handleChange} name="longitude" placeholder="Longitude"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Form