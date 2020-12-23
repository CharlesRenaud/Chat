
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers/chat';

import logMiddleware from 'src/middleware/logMiddleware';
import authMiddleware from 'src/middleware/authMiddleware';
import socketMiddleware from 'src/middleware/socketMiddleware';

// on combine plusieurs enhancers : devTools et chaque middleware
const enhancers = composeWithDevTools(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    socketMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
