import React, { Component, Fragment } from 'react';

import Lanches from './components/lanches/lanches';
import Cart from './components/cart/cart';

import GlobalStyles from './style';

class App extends Component {

  render() {

    return (
      <Fragment>
        <GlobalStyles />
        <div className="d-flex">
          <Lanches />
          <Cart />
        </div>
      </Fragment>
    );
  }
}

export default App;
