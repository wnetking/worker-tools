import React, { PropTypes, Component } from 'react'

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
                    <a className='nav-link' href='#' onClick={this.onMenuItemClicke.bind(this)}>Conventor</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#' onClick={this.onMenuItemClicke.bind(this)}>Loger</a>
                </li>
            </ul>
            </nav>
        </div>
    }
}

Menu.propTypes = {
    active: PropTypes.string.isRequired
}