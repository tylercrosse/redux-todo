import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

import { createStore } from 'redux';

function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => 
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() => 
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();