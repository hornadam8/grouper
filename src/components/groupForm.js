import React, { Component } from 'react';


class GroupForm extends Component {
  constructor(){
    super();
    this.state = {
      groupName: '',
      groupDescription: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addGroup(this.state);
    console.log(event.target.children[1].value);
    event.target.children[1].value = "";
    event.target.children[3].value = ""

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
            name="groupName"
            onChange={this.handleChange}
            value={this.state.groupName}
          />
          <br/>
          <label> Group description: </label>
          <input
            type="text_area"
            name="groupDescription"
            onChange={this.handleChange}
            value={this.state.groupDescription}
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
