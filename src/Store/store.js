import {createStore} from 'redux';
import rootReducer from './reducers/index.js';

const store = createStore(
  rootReducer,
  // This line enables Redux DevTools Extension, useful for debugging
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;