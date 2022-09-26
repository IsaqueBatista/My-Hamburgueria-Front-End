import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import Requests from './containers/Requests'

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pedidos" component={Requests} />
            </Switch>
        </Router>
    )
}

export default Routes;