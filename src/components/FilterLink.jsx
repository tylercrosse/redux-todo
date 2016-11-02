import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function FilterLink({ filter, children }) {
  return (
    <Link to={filter === 'all' ? '' : filter}
      activeStyle={{
        textDecoration: 'none',
        color: 'black',
      }}
    >
      {children}
    </Link>
  )
}

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired,
}

export default FilterLink;