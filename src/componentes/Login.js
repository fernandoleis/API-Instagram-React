import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    constructor() {
        super()
        this.state = { msg: '' }
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
                // Redirect.push('/timeline');
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