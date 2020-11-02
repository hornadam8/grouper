export const fetchComments = (groupId,postId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/groups/${groupId}/posts/${postId}/comments`)
      .then(r => {return r.json()})
      .then(comments => dispatch({type: 'ADD_COMMENTS',comments}));
  }
}
