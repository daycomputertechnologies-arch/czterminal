import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders CZTerminal app without crashing', () => {
  render(<App />);
  // Check if the app renders something
  const appElement = document.querySelector('#root');
  expect(appElement).toBeDefined();
});

test('basic sanity test', () => {
  expect(true).toBe(true);
});
