import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions';

export default function Footer({ store }) {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
      {' '}
      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
      {' '}
      <FilterLink filter='SHOW_COMPLETED'>
        Completed
      </FilterLink>
    </p>  
  )
}

function mapStateToLinkProps(state, ownProps) {
  return {active: ownProps.filter === state.visibilityFilter};
}
function mapDispatchToLinkProps(dispatch, ownProps) {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

function Link({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )
};