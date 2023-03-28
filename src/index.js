import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <App />
      <h1>Hello from Root</h1>
    </BrowserRouter>
  )
}

ReactDOM.render(
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
