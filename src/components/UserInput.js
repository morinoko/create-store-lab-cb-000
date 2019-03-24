import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      hometown: ''
    }
  }
  
  updateInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    });
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.updateInput}
          /><br />
          <label htmlFor="hometown">Hometown</label>
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.updateInput}
          /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
