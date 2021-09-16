import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import App from '../../App';

test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  const elementLink = screen.getByText(/STATS BY MARKET/i);
  expect(elementLink).toBeInTheDocument();
});
