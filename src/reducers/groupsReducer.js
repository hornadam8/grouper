const groupsReducer = (state = {groups:[], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_GROUPS':
      return {
        ...state,
        groups: [...state.groups],
        loading: true
      }
    case 'ADD_GROUP':
      debugger;
      return {
        ...state,
        groups: [...state.groups, {
          id: action.formData.id,
          name: action.formData.name,
          description: action.formData.description
        }],
        loading: false
      }
    default:
      return state;
  }
}

export default groupsReducer;
