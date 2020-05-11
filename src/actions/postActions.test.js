import { addPost, ADD_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from './postActions.js';

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

  it('creates an UPDATE_POST action', () => {
    const action = updatePost(1, {
      title: 'Spot is a Good Boy',
      body: 'No no, he\'s the Bestest Boy'
    });

    expect(action).toEqual({
      type: UPDATE_POST,
      payload: {
        index: 1,
        post: {
          title: 'Spot is a Good Boy',
          body: 'No no, he\'s the Bestest Boy'
        }
      }
    })
  })
})