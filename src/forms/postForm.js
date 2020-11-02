import React, { Component } from 'react';
import '../App.css';

class PostForm extends Component {

  constructor(props){

    super(props);
    this.state = {
      title: '',
      content: '',
      groupId: props.groupId
    };
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
    fetch(`http://localhost:3000/groups/${this.state.groupId}/posts`,configObj)
      .then(r => {return r.json()})
      .then(obj => {
        this.props.addPost(obj);
        let group = this.props.groups.find(e => e.id == this.props.groupId);
        group.posts = {...group.posts,obj}
      });

    this.setState({
      title: '',
      content: '',
      groupId: this.state.groupId
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div className="PostForm">
      <h3>Create a new post:</h3>
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>Title: </label>
        <br/>
        <input
          type="hidden"
          name="groupId"
          value={this.props.groupId}
        />
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <br/>
        <label> Content: </label>
        <br/>
        <textarea
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
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
};

export default PostForm;
