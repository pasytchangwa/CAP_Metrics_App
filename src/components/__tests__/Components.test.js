import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store/configureStore';
import Home from '../Home';
import Details from '../Details';

afterEach(() => {
  cleanup();
});

describe('Testing components', () => {
  test('should render Home component', () => {
    render(<Provider store={store}><Router><Home /></Router></Provider>);
    const homeElement = screen.getByTestId('main-component');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('market capital');
  });

  test('matches snapshot', () => {
    const rend = renderer
      .create(<Provider store={store}><Router><Details /></Router></Provider>).toJSON();
    expect(rend).toMatchSnapshot();
  });
});
