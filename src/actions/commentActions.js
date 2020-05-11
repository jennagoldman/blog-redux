export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (postIndex, comment) => ({
  type: ADD_COMMENT,
  payload: {
    postIndex,
    comment
  }
});