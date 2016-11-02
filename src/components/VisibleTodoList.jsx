import { connect } from 'react-redux';
import { toggleTodo } from '../actions/';
import TodoList from './TodoList.jsx'

function mapStateToProps(state, ownProps) {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter)
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(toggleTodo(id))
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}