import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App';
import CartReducer from './reducers/cartReducer';
import React from 'react';
import ReactDOM from 'react-dom';

const store = createStore(CartReducer);

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
