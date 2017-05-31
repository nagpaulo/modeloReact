import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/base.min.css';
import AutorBox from './model/Autor';

class App extends Component {
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
                                <li><a href="javascript:void(0);"><i className="fa fa-apple"></i> Autor</a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-book"></i> Livro</a></li>
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
                                <AutorBox/>
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
