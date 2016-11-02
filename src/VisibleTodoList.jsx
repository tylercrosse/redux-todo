import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './actions';

function mapStateToTodoListProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
function mapDispatchToTodoListProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(toggleTodo(id))
    }
  }
}
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList)

export default VisibleTodoList;

function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map(todo => 
        <Todo key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  )
}

function Todo({ onClick, completed, text }) {
  return (
    <li onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
}

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}