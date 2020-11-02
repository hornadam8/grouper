import React, { Component } from 'react';
import '../App.css'

class CommentForm extends Component {

  constructor(props){

    super(props);
    this.state = {
      content: '',
      postId: props.postId,
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
    fetch(`http://localhost:3000/groups/${this.state.groupId}/posts/${this.state.postId}/comments`,configObj)
      .then(r => {return r.json()})
      .then(obj => {
        this.props.addComment(obj);
        let post = this.props.posts.find(e => e.id == this.props.postId);
        post.comments = {...post.comments,obj}
      });

    this.setState({
      content: '',
      postId: this.state.postId
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render(){
    return(
      <div className='CommentForm'>
      <h3> Share your thoughts on this post: </h3>
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>Content: </label>
        <br/>
        <input
          type="hidden"
          name="postId"
          value={this.props.postId}
        />
        <input
          type="text"
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
}

export default CommentForm;
