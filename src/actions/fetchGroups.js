export const fetchGroups = () => {

  return (dispatch) => {
    console.log('fetch groups')
    //dispatch({type: 'START_ADDING_GROUPS_REQUEST'});
    fetch('http://localhost:3000/groups')
      .then(r => {return r.json()})
      .then(groups => dispatch({type: 'ADD_GROUPS',groups}))
      .catch(error => {console.log(error)})
  }
}
