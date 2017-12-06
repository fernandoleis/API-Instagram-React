import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = { fotos: [] };
    }

    componentDidMount() {
        // fetch('http://localhost:8080/api/fotos?X-AUTH-TOKEN=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbG90cyJ9.AQrl-JRJg39KeKYxMfNpnljXwxu0WOa8iYxT1Ih9Be-832MQBrJ5DxHwJzyQ-P-wp9lP49fSCmr_St-kl97nPw')
        fetch(`http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
            .then(response => response.json())
            .then(fotos => {
                this.setState({ fotos: fotos });
            });
    }

    render() {
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} jsonFoto={foto} />)
                }
            </div>
        )
    }
}