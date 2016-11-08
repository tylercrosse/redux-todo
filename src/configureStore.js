import { createStore, applyMiddleware } from 'redux';
import promise         from 'redux-promise';
import createLogger    from 'redux-logger';
import todoApp         from './reducers/'

function configureStore() {
  const middlewares = [promise];
  
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
      
  return createStore(
    todoApp,
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
}
  
export default configureStore