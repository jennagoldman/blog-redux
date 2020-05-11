import { addPost, ADD_POST, deletePost, DELETE_POST } from './postActions.js';

describe('post actions', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'Spot is a Good Boy',
      body: 'In fact, Spot is the Best Boy'
    })

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'Spot is a Good Boy',
        body: 'In fact, Spot is the Best Boy'
      }
    })
  })

  it('creates a DELETE_POST action', () => {
    const action = deletePost(2);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 2
    })
  })
})