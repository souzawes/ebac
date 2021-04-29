import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/home';
import Profile from '../pages/profile';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />                
                <Route exact path="/user/:userLogin" component={Profile} />                
            </Switch>
        </Router>
    )
}

