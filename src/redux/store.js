import {createStore} from 'redux';

import globalReducer from './globalRedux';


// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return globalReducer(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;