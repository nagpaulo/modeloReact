/**
 * Created by Paulo Roberto on 05/05/2017.
 */
import React, { Component } from 'react';

export default class GroupButtonSearchComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className={this.props.div}>
                    <div className="form-group">
                        <div className="btn-group" role="group" aria-label="...">
                            <button type="submit" id={this.props.id} className="btn btn-success">
                                <span className="fa fa-save"></span> Gravar
                            </button>
                            <button type="button" className="btn btn-default btLimpar">
                                <span className="fa fa-eraser"></span> Limpar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}