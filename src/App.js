import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalFontStyle />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/detail' component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
