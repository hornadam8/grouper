export function fetchPosts(group){
  return (dispatch) => {
    dispatch({type: 'START_ADDING_GROUPS_REQUEST'});
    fetch(`http://localhost:3000/groups/${group.id}/posts`)
      .then(r => {return r.json()})
      .then(groups => dispatch({type: 'ADD_GROUPS',groups}));
  }
}
