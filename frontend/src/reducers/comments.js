
const initialState = {
    comments: [],
  };

  const comments = (state = initialState, {type, payload}) => {
  
    switch (type) {
      case 'SET_comment':
        return { comments: [...payload] };
  
      case 'CREATE_comment':
        return { comments: [...state.comments, payload] };
  
      case 'UPDATE_comment':
        return {
          comments: state.comments.map((comment) => {
            if (comment._id === payload._id) {
              return payload;
            } else {
              return comment;
            }
          }),
        };
  
      case 'DELETE_comment':
        return {
          comments: state.comments.filter(
            (comment) => comment._id !== payload._id,
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default comments;
  
  export const setComments = (comments) => {
    return {
      type: 'SET_comment',
      payload: comments,
    };
  };
  
  export const createComment = (comment) => {
    return {
      type: 'CREATE_comment',
      payload: comment,
    };
  };
  
  export const updateComment= (comment) => {
    return {
      type: 'UPDATE_comment',
      payload: comment,
    };
  };
  
  export const deleteComment = (comment) => {
    return {
      type: 'DELETE_comment',
      payload: comment,
    };
  };