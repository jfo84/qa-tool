import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import reducers from '../redux/reducers';

import Head from './Head';
import { MainTitle } from './styled';

const LoadableRoot = Loadable({
  loader: () => import(/* webpackChunkName: 'root' */ './Root'),
  loading: () => <div>Loading...</div>
});

const initialState = { questions: [] };
const middlewares = [thunk];

if (process.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

const App = () => (
  <>
    <Head />
    <div className="app">
      <MainTitle>The awesome Q/A Tool</MainTitle>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={LoadableRoot} />
        </Switch>
      </Provider>
    </div>
  </>
);

export default App;
