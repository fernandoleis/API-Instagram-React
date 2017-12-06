import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';


ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route exact path="/timeline" render={() => (isLoggedIn() ?
                    (<Redirect to={{
                        pathname: '/',
                        state: { errorMessage: 'usuário não autenticado' }
                    }} />) :
                    (<App />))} />
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
function isLoggedIn() {
    return localStorage.getItem('auth-token') === null;
}