import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Detailpage from '../component/Detailspage';

describe('Details page test for components', () => {
  test('render each crypto details', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <Detailpage />
        </BrowserRouter>
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });
});
