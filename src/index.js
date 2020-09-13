import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import * as serviceWorker from './serviceWorker';
import FastClick from "fastclick";
import { Provider } from "react-redux";
import store from "./store/index";
import "./config/rem";

// 去除移动端 300ms点击延时
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

ReactDOM.render(
	<Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
	document.getElementById('root')
);

// serviceWorker.unregister();
