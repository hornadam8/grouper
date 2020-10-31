import React, { Component } from 'react';

class Post extends Component {
  render(){
    let post = this.props.post
    return(
      <div className="Post">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post;
