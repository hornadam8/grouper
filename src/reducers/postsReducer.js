const postsReducer = (state = {posts:[], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_POSTS':
      return {
        ...state,
        posts: [...state.posts],
        loading: true
      }
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, {
          id: action.formData.id,
          title: action.formData.title,
          content: action.formData.content,
          groupId: action.groupId
        }],
        loading: false
      }
    case 'DELETE_POST':
      const newState = state.posts.filter(inst => inst.id !== action.id);
      return{
        ...state,
        posts: newState
      }
    case 'START_ADDING_POSTS_REQUEST':
      return {
        ...state,
        posts: [...state.posts],
        requesting: true
      }
    case 'ADD_POSTS':
      return {
        ...state,
        posts: action.posts,
        requesting: false
      }
    default:
      return state;
  }
}

export default postsReducer;
