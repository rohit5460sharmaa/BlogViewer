// __tests__/PostList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../src/components/PostList';
const mockPosts = [
  { id: '1', title: 'Post 1' },
  { id: '2', title: 'Post 2' },
];

test('renders list of post titles', () => {
  render(<PostList posts={mockPosts} onSelectPost={() => {}} />);
  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Post 2')).toBeInTheDocument();
});

test('calls onSelectPost when post is clicked', () => {
  const mockFn = jest.fn();
  render(<PostList posts={mockPosts} onSelectPost={mockFn} />);
  fireEvent.click(screen.getByText('Post 1'));
  expect(mockFn).toHaveBeenCalledWith(mockPosts[0]);
});
