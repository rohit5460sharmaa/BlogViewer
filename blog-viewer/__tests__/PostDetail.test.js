import React from 'react';
import { render } from '@testing-library/react';
import PostDetail from '../src/components/PostDetail';

jest.mock('@heroicons/react/24/outline', () => ({
  DocumentTextIcon: () => <svg data-testid="icon" />,
}));

test('renders nothing if no post is selected', () => {
  const { container } = render(<PostDetail post={null} />);
  expect(container.firstChild).toBeNull();
});

test('renders post title and content', () => {
  const post = { title: 'Sample Post', content: 'This is the content.' };
  const { getByText, getByTestId } = render(<PostDetail post={post} />);
  expect(getByText('Sample Post')).toBeInTheDocument();
  expect(getByText('This is the content.')).toBeInTheDocument();
  expect(getByTestId('icon')).toBeInTheDocument();
});
