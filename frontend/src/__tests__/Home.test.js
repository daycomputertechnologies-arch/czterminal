import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('Home page renders without crashing', () => {
  render(<Home />);
  // Add specific assertions for your Home page
  expect(true).toBe(true);
});
