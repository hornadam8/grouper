const groupsReducer = (state = {groups:[], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_GROUPS':
      return {
        ...state,
        groups: [...state.groups],
        loading: true
      }
    case 'ADD_GROUP':
      return {
        ...state,
        groups: [...state.groups, {
          groupName: action.formData.groupName,
          groupDescription: action.formData.groupDescription
        }],
        loading: false
      }
    default:
      return state;
  }
}

export default groupsReducer;
