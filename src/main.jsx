import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/online-shopping'>
  <Provider store={store}>
   <App />

  </Provider>
 
  </BrowserRouter>,
)