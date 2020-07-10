import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './assets/styles/index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';
import generateStore from './redux/store';

let store = generateStore();

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
