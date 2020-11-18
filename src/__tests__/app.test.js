import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';
test('renders learn react link', () => {
  render(<App />);

  // screen.debug();
  const urlInput = screen.getByTestId('url');
  const submitButton = screen.getByTestId('submit-button');
  urlInput.value = 'https://jsonplaceholder.typicode.com/posts';
  fireEvent.click(submitButton);
  const result = screen.getByTestId('result');
  console.log('urlInput.value', urlInput.value);
  console.log('result', result);
});
