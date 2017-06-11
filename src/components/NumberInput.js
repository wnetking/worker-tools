import React, { Component } from 'react'

export default class NumberInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`input-group ${this.props.className}`}>
                <input aria-describedby={this.props.id} className='form-control form-control-lg' ref={this.props.Inputref} type='number' placeholder={this.props.placeholder} onChange={this.props.onChange}></input>
                <span className='input-group-addon' id={this.props.id}>
                    {this.props.children}
                </span>
            </div>
        )
    }
}