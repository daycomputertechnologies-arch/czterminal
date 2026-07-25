import { render } from '@testing-library/react';
import WalletConnect from '../components/WalletConnect';

test('WalletConnect component renders without crashing', () => {
  render(<WalletConnect />);
  expect(true).toBe(true);
});
