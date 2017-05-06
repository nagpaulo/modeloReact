/**
 * Created by Paulo Roberto on 05/05/2017.
 */
import React, { Component } from 'react';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import InputCustomizado from '../components/InputCustomizado';
import GroupButtonSearchComponent from '../components/GroupButtonSearchComponent';

class FormularioAutor extends Component{
    constructor(){
        super();
        this.state = {nome:'',email:'',senha:''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

    enviaForm(event){
        event.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/tethys/api/autores',
            data: JSON.stringify({nome:this.state.nome, email:this.state.email, senha:this.state.senha}),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function(novaListagem){
                PubSub.publish('atualiza-lista-autores',novaListagem);
            },
            error: function(resposta){
                console.log("erro: "+resposta);
            }
        });
    }

    setNome(event){
        this.setState({nome:event.target.value});
    }

    setEmail(event){
        this.setState({email:event.target.value});
    }

    setSenha(event){
        this.setState({senha:event.target.value});
    }

    render(){
        return(
            <form className="form" onSubmit={this.enviaForm} method="post">
                <InputCustomizado div="col-md-9" label="Nome" type="text" name="nm_autor" id="nm_autor" value={this.state.nome} onChange={this.setNome}/>
                <InputCustomizado div="col-md-6" label="Email" type="email" name="nm_email" id="nm_email" value={this.state.email} onChange={this.setEmail}/>
                <InputCustomizado div="col-md-6" label="Senha" type="password" name="nm_senha" id="nm_senha" value={this.state.senha} onChange={this.setSenha}/>
                <GroupButtonSearchComponent div="col-md-9" id="btSearch"/>
            </form>
        );
    }

}
class TabelaAutores extends Component {

    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th width="25" className="check">
                                <input type="checkbox" id="btCheckAll"/></th>
                            <th className="text-left">Nome</th>
                            <th className="text-left">Email</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.lista.map(function (autor) {
                                return (
                                    <tr key={autor.id}>
                                        <td><input type="checkbox" id="btCheckOne" value={autor.id}/></td>
                                        <td>{autor.nome}</td>
                                        <td>{autor.email}</td>
                                        <td>
                                            <button type="button" className="btn btn-default btn-xs" title="Editar" data-toggle="tooltip">
                                                <span className="fa fa-pencil"></span>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default class AutorBox extends Component{
    constructor(){
        super();
        this.state = {lista : []};
    }

    componentDidMount(){
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            },
            async:false,
            url:"http://localhost:8080/tethys/api/autores",
            dataType: 'json',
            success: function (resposta) {
                this.setState({lista:resposta})
            }.bind(this)
        });

        PubSub.subscribe('atualiza-lista-autores', function(topico,novaLista){
            this.setState({lista:novaLista});
        }.bind(this));
    }

    render(){
        return(
            <div id="autorBox">
                <FormularioAutor/>
                <TabelaAutores lista={this.state.lista}/>
            </div>
        );
    }
}