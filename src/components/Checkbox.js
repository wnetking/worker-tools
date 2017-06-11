import React, { Component } from 'react'

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`form-check col-form-label ${this.props.className}`}>
                <label className='form-check-label'>
                    <input className='form-check-input' type='checkbox' value={this.props.value} onClick={this.props.onClick} />
                    {this.props.children}
                </label>
            </div>

        )
    }
}