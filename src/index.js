import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormRndering from './components/FormRndering';
import Home from './components/Home';
import ListRendering from './components/ListRendering';
import FormRnderinginFunctions from './components/FormRnderinginFunctions';

ReactDOM.render(
  <React.StrictMode>
    {
    //  <App />
    //  <FormRndering />
    // <ListRendering />
    //  <Home />
    <FormRnderinginFunctions />
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
