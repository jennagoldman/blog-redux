import { addPost, deletePost, updatePost } from '../actions/postActions.js';
import reducer from './postReducer.js';

describe('posts reducer', () => {
  it('handles the addPost action', () => {
    const state = [];
    const action = addPost({
      title: 'Spot is a Good Boy',
      body: 'In fact, Spot is the Best Boy'
    })

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'Spot is a Good Boy',
        body: 'In fact, Spot is the Best Boy'
      }
    ])
  })
})