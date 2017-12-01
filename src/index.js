import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import App from './App';
import Login from './componentes/Login.js'


ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                {/* <Route path="/logout" component={Logout} /> */}
                <Route exact path="/timeline" component={App}/>
                {/* <Route exact path="/timeline" render={() => (
                    isLoggedIn() ? (
                        <Redirect to="/?msg=Você precisa estar logado para acessar o endereço" />
                    ) : (
                            <App />
                        )
                )} /> */}
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
