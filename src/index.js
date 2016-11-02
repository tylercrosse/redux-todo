import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';
import { Provider }    from 'react-redux'
import todoApp         from './reducers/'
import TodoApp         from './components/App.jsx'

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store} >
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
