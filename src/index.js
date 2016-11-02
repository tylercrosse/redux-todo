import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';
import { Provider }    from 'react-redux'
import todoApp         from './reducers.js'
import AddTodo         from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import Footer          from './Footer.jsx';

function TodoApp({ store }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <Provider store={createStore(todoApp)} >
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
