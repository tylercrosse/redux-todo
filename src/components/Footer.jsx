import React from 'react';
import FilterLink from './FilterLink.jsx'

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