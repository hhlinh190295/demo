import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import './index.css';
import Login from './containers/Login';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import { createStore } from 'redux'
import Error from "./containers/ContentArea/Content/Error";
import App from "./App";
import Tab1 from "./containers/ContentArea/Content/Tab1";
import Tab2 from "./containers/ContentArea/Content/Tab2";
import Tab3 from "./containers/ContentArea/Content/Tab3";
import Home from "./containers/ContentArea/Content/Home";

const store = createStore(todos, ['Use Redux']);
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state
    }
}
render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
