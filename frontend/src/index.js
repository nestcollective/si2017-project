import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import user from './reducers/user';
import error from './reducers/error';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';

const history = createHistory();
const middleware = routerMiddleware(history);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
    this.store = createStore(
      combineReducers({
        user,
        error,
        router: routerReducer,
      }),
      undefined,
      compose(
        applyMiddleware(thunk, middleware),
        autoRehydrate(),
      ),
    );
    window.store = this.store;
    persistStore(this.store, { blacklist: ['error'] }, () => this.setState({ loading: false }));
  }

  render() {
    return this.state.loading
      ? null
      : <Provider store={this.store}>
        <Router history={history} />
      </Provider>
    ;
  }
}

registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
