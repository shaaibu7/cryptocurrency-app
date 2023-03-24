import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Homepage from '../component/Homepage';

describe('Home test for crypto rendering', () => {
  test('render all crypto`s from api', () => {
    const homepage = render(
      <Provider store={store}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </Provider>,
    );
    expect(homepage).toMatchSnapshot();
  });
});
