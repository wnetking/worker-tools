import React, { Component } from 'react'

export default class Menu extends Component {
    onMenuItemClicke(e){
        e.preventDefault()
        this.props.setActive(e.target.innerText.trim());
    }
    render() {
        return <div>
            <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
            <ul className='nav nav-pills'>
                <li className='nav-item'>
                    <a className='nav-link' href='#' onClick={this.onMenuItemClicke.bind(this)}>Convector</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#' onClick={this.onMenuItemClicke.bind(this)}>Logger</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#' onClick={this.onMenuItemClicke.bind(this)}>Trader Info</a>
                </li>
            </ul>
            </nav>
        </div>
    }
}