import React, { Component } from 'react';
import $ from 'jquery';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/base.min.css';
import InputCustomizado from './components/InputCustomizado';
import GroupButtonSearchComponent from './components/GroupButtonSearchComponent';

class App extends Component {
    constructor(){
        super();
        this.state = {lista : [],nome:'',email:'',senha:''};
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
            success: function(resposta){
                this.setState({lista:resposta})
            }.bind(this),
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
    }

    render() {
        return (
            <div id="template">
                <div id="top">
                    <div className="container">
                        <div className="user-info text-right">
                            <i className="fa fa-user"></i> <span></span>
                            <span className="hidden-sm hidden-xs">
                                <i className="fa fa-home"></i> <span></span>
                                <i className="fa fa-calendar-o"></i> <span></span>
                            </span>
                        </div>
                        <div className="col-sm-8">
                            <div className="pull-left titulo">
                                <span className="line2">Teste</span>
                                <span className="line_sub">Sample</span>
                            </div>
                        </div>
                        <div className="col-sm-4 hidden-xs">
                            <i className="fa fa-envira fa-3x pull-right img-responsive" aria-hidden="true" id="logo-seduc"></i>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-default navbar-static-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="fa fa-home"></i> Início
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="content">
                    <div className="container" id="container-body">
                        <h3><i className="fa fa-users"></i> Modelo </h3>
                        <a href="#" className="command-page">
                            <span className="fa fa-reply"></span> Voltar
                        </a>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="alert-container"></div>
                                <form className="form" onSubmit={this.enviaForm} method="post">
                                    <InputCustomizado div="col-md-9" label="Nome" type="text" name="nm_autor" id="nm_autor" value={this.state.nome} onChange={this.setNome}/>
                                    <InputCustomizado div="col-md-6" label="Email" type="email" name="nm_email" id="nm_email" value={this.state.email} onChange={this.setEmail}/>
                                    <InputCustomizado div="col-md-6" label="Senha" type="password" name="nm_senha" id="nm_senha" value={this.state.senha} onChange={this.setSenha}/>
                                    <GroupButtonSearchComponent div="col-md-9" id="btSearch"/>
                                </form>

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
                                                this.state.lista.map(function (autor) {
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
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer" className="hidden-xs hidden">
                    <span>2017 - Template Modelo</span>
                </div>
            </div>
        );
    }
}

export default App;
