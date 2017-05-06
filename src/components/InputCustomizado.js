/**
 * Created by Paulo Roberto on 05/05/2017.
 */
import React, { Component } from 'react';

export default class InputCustomizado extends Component {
    render(){
        return (
            <div className="row">
                <div className={this.props.div}>
                    <div className="form-group">
                        <label className="control-label">{this.props.label}</label>
                        <input type={this.props.type} name={this.props.name} id={this.props.id}
                               value={this.props.value} className="form-control" onChange={this.props.onChange}/>
                    </div>
                </div>
            </div>
        );
    }
}