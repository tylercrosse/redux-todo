import { connect } from 'react-redux';
import { toggleTodo } from '../actions/';
import TodoList from './TodoList.jsx'

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