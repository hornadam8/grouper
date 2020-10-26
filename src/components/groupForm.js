import React, { Component } from 'react';


class GroupForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      description: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    fetch('http://localhost:3000/groups',configObj)
      .then(r => {return r.json()})
      .then(obj => {debugger;this.props.addGroup(obj)});
    this.setState({
      name: '',
      description: ''
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){
    return(
      <div className='GroupForm'>
        <h3>Create a new group:</h3>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Group name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br/>
          <label> Group description: </label>
          <input
            type="text_area"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <br/>
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}

export default GroupForm;
