import React          from 'react';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';
import * as actions   from '../actions/';
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers/';
import TodoList   from './TodoList.jsx';
import FetchError from './FetchError.jsx';

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
    fetchTodos(filter);
  }
  render() {
    const { isFetching, errorMessage, toggleTodo, todos } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} 
          onRetry={() => this.fetchData()}
        />
      );
    }
    return (
      <TodoList todos={todos}
        onTodoClick={toggleTodo} 
      />
    );
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter, 
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;