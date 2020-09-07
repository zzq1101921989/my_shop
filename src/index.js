import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import * as serviceWorker from './serviceWorker';
import FastClick from "fastclick";

// 去除移动端 300ms点击延时
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

ReactDOM.render(
	<BrowserRouter>
        <App />
    </BrowserRouter>,
	document.getElementById('root')
);

// serviceWorker.unregister();
