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
          id: action.formData.id,
          name: action.formData.name,
          description: action.formData.description
        }],
        loading: false
      }
    case 'DELETE_GROUP':
      const newState = state.groups.filter(inst => inst.id !== action.id);
      return{
        ...state,
        groups: newState
      }
    case 'START_ADDING_GROUPS_REQUEST':
      return {
        ...state,
        astronauts: [...state.groups],
        requesting: true
      }
    case 'ADD_GROUPS':
      return {
        ...state,
        groups: action.groups,
        requesting: false
      }
    default:
      return state;
  }
}

export default groupsReducer;
