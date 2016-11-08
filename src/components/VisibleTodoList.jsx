import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/';
import { getVisibleTodos } from '../reducers/';
import TodoList            from './TodoList.jsx'

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }
  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter)
  }
  render() {
    const { toggleTodo, ...rest } = this.props
    return (
      <TodoList {...rest}
        onTodoClick={toggleTodo} 
      />
    );
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter, 
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;