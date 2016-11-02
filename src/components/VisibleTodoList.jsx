import { connect }    from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo }      from '../actions/';
import { getVisibleTodos } from '../reducers/';
import TodoList            from './TodoList.jsx'

function mapStateToProps(state, { params }) {
  return {
    todos: getVisibleTodos(state, params.filter || 'all')
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(toggleTodo(id))
    }
  }
}
const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;