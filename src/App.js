import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import Viewer from './viewer/ViewerContainer';
import Chooser from './chooser/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <div className="chooser">
              <Chooser />
            </div>
            <div className="viewer">
              <Viewer />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
