import React, { Component } from 'react';

class FotoItem extends Component {
    render() {
        return (
            <div>
                <div className="foto">
                    <FotoHeader jsonFoto={this.props.jsonFoto} />
                    <img alt="foto" className="foto-src" src={this.props.jsonFoto.urlFoto} />
                    <FotoInfo jsonFoto={this.props.jsonFoto} />
                    <FotoAtualizacoes />
                </div>
            </div>
        );
    }
}

class FotoHeader extends Component {
    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src={this.props.jsonFoto.urlPerfil} alt=""/>
                    <figcaption className="foto-usuario">
                        <a href="">{this.props.jsonFoto.loginUsuario}</a>
                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.jsonFoto.horario}</time>
            </header>

        )
    }
}

class FotoInfo extends Component {
    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {
                        this.props.jsonFoto.likers.map(liker => {
                            return <a href="">{liker.login}</a>
                        })
                    },&nbsp;

                    <a href="">alots_ssa</a>,<a href="">rafael_rollo</a>curtiram
                </div>
                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    {this.props.jsonFoto.comentario}
                </p>
                <ul className="foto-info-comentarios">
                    <li className="comentario">
                        {
                            this.props.jsonFoto.comentarios.map(comentario => {
                                return (
                                    <li className="comentario" key={comentario.id}>
                                        <a className="foto-info-autor">{comentario.login}</a>
                                        {comentario.texto}
                                    </li>
                                );
                            })
                        }
                    </li>
                </ul>
            </div>

        )
    }
}

class FotoAtualizacoes extends Component {
    render() {
        return (
            <section className="fotoAtualizacoes">
                <a href="" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>
            </section>
        )
    }
}

export default FotoItem;