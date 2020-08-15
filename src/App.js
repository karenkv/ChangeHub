import React, {Component} from 'react';
import {Router, Switch, Route} from "react-router-dom";
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';
import history from './history';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Dashboard}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
