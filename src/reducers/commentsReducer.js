const commentsReducer = (state = {comments:[], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_COMMENTS':
      return {
        ...state,
        comments: [...state.comments],
        loading: true
      }
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, {
          content: action.formData.content,
          postId: action.postId
        }],
        loading: false
      }
    case 'DELETE_COMMENT':
      const newState = state.comments.filter(inst => inst.id !== action.id);
      return{
        ...state,
        comments: newState
      }
    case 'ADD_COMMENTS':
      return {
        ...state,
        comments: action.comments,
        requesting: false
      }
    default:
      return state;
  }
}

export default commentsReducer;
