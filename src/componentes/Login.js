import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);
        var msg;
        if (this.props.location.state === undefined) {
            msg = "";
        } else {
            msg = this.props.location.state.errorMessage;
        }
        this.state = { msg: msg };
        console.log("msg" + msg);

        // outra forma de fazer
        // const queryParams = new URLSearchParams(props.location.search);
        // const queryMsg = queryParams.get('msg');
        // if (queryMsg) {
        //     msg = queryMsg;
        // }

        // outra forma de resolver a questa de pegar a mensagem na url
        // const queryString = require('query-string');
        // const mensagem = queryString.parse(props.location.search);
        // console.log(mensagem);
    }

    envia(event) {
        event.preventDefault();
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ login: this.login.value, senha: this.senha.value }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch('http://localhost:8080/api/public/login', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possível fazer o login');
                }
            })
            .then(token => {
                console.log(token);
                localStorage.setItem('auth-token', token);
                this.props.history.push('/timeline');
                // R    edirect.push('/timeline');
                // <Redirect pushto='/timeline'/>

            })
            .catch(error => {
                this.setState({ msg: error.message });
            });
    };

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input} />
                    <input type="text" ref={(input) => this.senha = input} />
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }
}