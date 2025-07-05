import { getStaticProps } from '../src/pages/posts'; 
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: '1', title: 'Post 1', summary: 'Summary 1', content: 'Content 1' },
        { id: '2', title: 'Post 2', summary: 'Summary 2', content: 'Content 2' },
      ]),
  })
);

describe('getStaticProps', () => {
  it('fetches posts and returns them as props', async () => {
    const response = await getStaticProps();

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/posts');
    expect(response).toEqual({
      props: {
        posts: [
          { id: '1', title: 'Post 1', summary: 'Summary 1', content: 'Content 1' },
          { id: '2', title: 'Post 2', summary: 'Summary 2', content: 'Content 2' },
        ],
      },
    });
  });
});
