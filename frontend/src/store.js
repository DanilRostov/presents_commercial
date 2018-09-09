import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  // compose(
  //   applyMiddleware(thunk)
  // )
  composeWithDevTools(applyMiddleware(
    thunk
  ))
);