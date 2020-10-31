import React, { Component } from 'react';
import Post from '../components/post.js';
import { fetchPosts } from '../actions/fetchPosts.js'
import { connect } from 'react-redux';

class PostsContainer extends Component {
  render(){
    let postsList = [];
    if (this.props.posts){
      postsList = this.props.posts.map(post => {
        return(
          <Post key={post.id} post={post} groupId={this.props.groupId}/>
        )
      })
    }
    return(
      <div className="PostsContainer">
        <ul>
        {postsList}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchPosts: () => dispatch(fetchPosts()),
    addPost: formData => dispatch({type: 'ADD_POST', formData}),
    deletePost: id => dispatch({type: 'DELETE_POST', id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsContainer);
