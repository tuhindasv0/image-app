import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Home from "./Homepage";
import history from './history';
import Upload from "./Upload";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/upload" exact component={Upload} />
                </Switch>
            </Router>
        )
    }
}
