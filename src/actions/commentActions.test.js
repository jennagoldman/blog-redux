import { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions.js';

describe('comments actions', () => {
  it('creates an ADD_COMMENT action', () => {
    const action = addComment(0, 'This is a comment');

    expect(action).toEqual({
      type: ADD_COMMENT,
      payload: {
        postIndex: 0,
        comment: 'This is a comment'
      }
    })
  })

  it('creates a DELETE_COMMENT action', () =>{
    const action = deleteComment(0, 0);

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postIndex: 0,
        commentIndex: 0
      }
    })
  })
})