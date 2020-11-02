import React, { Component } from 'react';
import Comment from '../components/comment.js';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/fetchComments.js';

class CommentsContainer extends Component {
  componentDidMount(){
    this.props.fetchComments(this.props.groupId,this.props.postId)
  }
  render(){
    let commentsList = [];
    if (this.props.comments.comments.length > 0){
      commentsList = this.props.comments.comments.map(comment => {
        return(
          <Comment key={comment.id} comment={comment} groupId={this.props.groupId} postId={this.props.postId} deleteComment={this.props.deleteComment}/>
        )
      })
    }
    return(
      <div className='CommentsContainer'>
        {commentsList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchComments: (groupId,postId) => dispatch(fetchComments(groupId,postId)),
    addComment: formData => dispatch({type: 'ADD_COMMENT', formData}),
    deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer);
