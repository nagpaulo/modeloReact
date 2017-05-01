import React, { Component } from 'react';
import $ from 'jquery';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/base.min.css';

class App extends Component {
    constructor(){
        super();
        this.state = {lista: []};
    }

    componentDidMount(){
        $.ajax({
          url:"http://localhost:8080/tethys/api/autores",
          dataType: 'json',
          success: function (resposta) {
              console.log(resposta);
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
                        <a href="#" className="command-page" onclick="">
                            <span className="fa fa-reply"></span> Voltar
                        </a>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="alert-container"></div>
                                <form action="" method="post" className="form" id="formInsertEdit" role="form">

                                </form>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th width="25" className="check">
                                                <input type="checkbox" id="btCheckAll"/></th>
                                            <th>Nome</th>
                                            <th>Email</th>
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
                <div id="footer" className="hidden-xs hidden">
                    <span>2017 - Template Modelo</span>
                </div>
            </div>
        );
    }
}

export default App;
