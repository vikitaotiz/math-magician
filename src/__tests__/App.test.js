import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('home-content')).toBeInTheDocument();
});
