import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card'>
                <div className='card-header'>{this.props.header}</div>
                <div className='card-block'>
                    <div className='card-text'>
                        <span>{this.props.children}</span>
                    </div>
                </div>
            </div>
        )
    }
}