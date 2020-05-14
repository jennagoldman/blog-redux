import { getPosts, getPostByIndex } from './postSelectors.js';

describe('posts selectors', () => {
  it('gets a list of posts', () => {
    const state = [
      {
        title: 'Spot is a Good Boy',
        body: 'In fact, Spot is the Best Boy'
      }
    ];

    const posts = getPosts(state);

    expect(posts).toEqual([
      {
        title: 'Spot is a Good Boy',
        body: 'In fact, Spot is the Best Boy'
      }
    ])
  })

  it('gets a post by index', () => {
    const state = [
      {
        title: 'Spot is a Good Boy',
        body: 'In fact, Spot is the Best Boy'
      }
    ];

    const post = getPostByIndex(state, 0);

    expect(post).toEqual({
      title: 'Spot is a Good Boy',
      body: 'In fact, Spot is the Best Boy'
    })
  })
})