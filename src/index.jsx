import './index.less';
import React from 'react';
import { render } from 'react-dom';
import App from "./components/App.jsx";
import { Provider } from 'react-redux';
import { store } from './reducers/index';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)