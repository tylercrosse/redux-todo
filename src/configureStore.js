import { createStore } from 'redux';
import throttle        from 'lodash/throttle'
import todoApp                  from './reducers/'
import { loadState, saveState } from './localStorage.js'

function configureStore() {
  const persistedState = loadState()
  const store = createStore(
    todoApp,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
  
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))
  
  return store
}
  
export default configureStore