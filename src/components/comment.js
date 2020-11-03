import React, { Component } from 'react';
import '../App.css';

class Comment extends Component {

  handleClick = () => {
    let id = this.props.comment.id;
    this.props.deleteComment(id);
    let groupId = this.props.groupId;
    let postId = this.props.postId;
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(id)
    };
    fetch(`http://localhost:3000/groups/${groupId}/posts/${postId}/comments/${id}`,configObj)
  }

  render(){
    let comment = this.props.comment;
    return(
      <div className='Comment' style={{backgroundColor: 'grey', borderRadius: '25px'}}>
        <p>{comment.content}</p>
        <br/>
        <button onClick={this.handleClick}> Delete </button>
      </div>
    )
  }
}

export default Comment;
