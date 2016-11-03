import React from 'react';
import AddTodo         from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import Footer          from './Footer.jsx';

export default function App({ params }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}