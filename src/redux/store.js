import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,

  composeEhancer(applyMiddleware(thunk))
);

export default store;
