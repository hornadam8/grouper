import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Post extends Component {

  handleClick = () => {
    let id = this.props.post.id
    this.props.deletePost(id)
    let groupId = this.props.groupId

    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(id)
    };
    fetch(`http://localhost:3000/groups/${groupId}/posts/${id}`,configObj)
  }

  render(){
    let post = this.props.post
    return(
      <div className="Post" style={{backgroundColor: 'grey', borderRadius: '25px'}}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <br/>
        <button id='PostShowLink'><Link to={`/groups/${this.props.groupId}/posts/${this.props.post.id}`}>View this post</Link></button>
        <br/>
        <button onClick={this.handleClick}> Delete </button>
      </div>
    )
  }
}

export default Post;
