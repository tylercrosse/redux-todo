import React           from 'react';
import ReactDOM        from 'react-dom';
import configureStore from './configureStore.js'
import Root           from './components/Root.jsx'

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
