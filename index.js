import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

function SecondApp() {
    return <h1>This is the second App</h1>;
}

ReactDOM.render(
    <div>
        <App />
        <SecondApp />
    </div>,
  document.getElementById("root")
);


