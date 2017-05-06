/**
 * Created by Paulo Roberto on 05/05/2017.
 */
import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class InputCustomizado extends Component {
    constructor(){
        super(),
        this.state = {msgErro:''};
    }

    componentDidMount() {
        PubSub.subscribe("erro-validacao",function(topico,erro){
            if(erro.field === this.props.name){
                this.setState({msgErro:erro.defaultMessage});
            }
        }.bind(this));

        PubSub.subscribe("limpa-erros",function(topico){
            this.setState({msgErro:''});
        }.bind(this));
    }

    render(){
        return (
            <div className="row">
                <div className={this.props.div}>
                    <div className="form-group">
                        <label className="control-label">{this.props.label}</label>
                        <input type={this.props.type} name={this.props.name} id={this.props.id}
                               value={this.props.value} className="form-control" onChange={this.props.onChange}/>
                        <span className="erro">{this.state.msgErro}</span>
                    </div>
                </div>
            </div>
        );
    }
}