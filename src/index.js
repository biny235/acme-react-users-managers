import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import axios from 'axios';
import Main from './Main';
import Managers from './Managers'
import Users from './Users'

const app = document.getElementById('app');


ReactDOM.render(
        <Router history={hashHistory}>
            <Route exact path='/' component={Main} >
                <Route path='users' component={Users} />
                <Route path='managers' component={Managers} />
                
            </Route>
        </Router>
    ,
    app
)