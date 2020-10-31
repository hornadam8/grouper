export const fetchPosts = (groupId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/groups/${groupId}/posts`)
      .then(r => {return r.json()})
      .then(posts => dispatch({type: 'ADD_POSTS',posts}));
  }
}
