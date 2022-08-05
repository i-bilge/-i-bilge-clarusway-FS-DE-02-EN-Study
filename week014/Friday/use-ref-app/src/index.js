import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseRef from './UseRef';
import UseRef2 from './UseRef2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Counting re-renders with state: </h1>
      <p>Obviously an infinite loop...</p>
      {/* <App /> */}
      <br />
      <h1>Counting re-renders with useRef</h1>
      <UseRef />
      <h1>useRef with elements: </h1>
      <UseRef2 />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
