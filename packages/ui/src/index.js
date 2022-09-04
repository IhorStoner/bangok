import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles.css'
import createStore from "./redux/createStore";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);