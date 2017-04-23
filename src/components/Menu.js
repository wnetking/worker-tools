import React, { PropTypes, Component } from 'react'

export default class Menu extends Component {
    onMenuItemClicke(e){
        e.preventDefault()
        this.props.setActive(e.target.innerText.trim());
    }
    render() {
        const { active } = this.props
        return <div>
            <p>Активный пункт меню {active}!</p>
            <ul className='nav nav-pills'>
                <li className='nav-item'>
                    <a className='btn btn-outline-success' href='#' onClick={this.onMenuItemClicke.bind(this)}>Conventor</a>
                </li>
                <li className='nav-item'>
                    <a className='btn btn-outline-success' href='#' onClick={this.onMenuItemClicke.bind(this)}>Optimizer</a>
                </li>
                <li className='nav-item'>
                    <a className='btn btn-outline-success' href='#' onClick={this.onMenuItemClicke.bind(this)}>Loger</a>
                </li>
            </ul>
        </div>
    }
}

Menu.propTypes = {
    active: PropTypes.string.isRequired
}