import { combineReducers } from 'redux';
import viewModeReducer from './combinedReducers.js';

// If you have other reducers, include them here
const rootReducer = combineReducers({
  viewMode: viewModeReducer,
  // other reducers can be added here
});

export default rootReducer;
