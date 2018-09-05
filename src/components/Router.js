import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Animal from './Animal';

// stateless function component
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Menu" component={Menu}/>
            <Route exact path="/Animal-Page" component={Animal}/>;
        </Switch>
    </BrowserRouter>
)
 
export default Router;