import React, { Component } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'

let style = {
    padding: '10px 30px'
}

let menuData = [
    { to: '/', label: 'Convector', exact: true },
    { to: '/loger', label: 'Logger', exact: false },
    { to: '/trader', label: 'Trader Info', exact: false },
    { to: '/todo', label: 'Todo app', exact: false }
]

export default class Menu extends Component {
    render() {
        return (
            <nav className='bg-faded panel panel-default'>
                <ul className='list-group'>
                    {menuData.map((item, index) => (
                        <MenuLink key={index} activeOnlyWhenExact={item.exact} to={item.to} label={item.label} style={style} />
                    ))}
                </ul>
            </nav>
        )
    }
}

const MenuLink = ({ label, to, activeOnlyWhenExact, style }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <li className={match ? 'active list-group-item' : 'list-group-item'} style={style}>
            <Link to={to}>{label}</Link>
        </li>
    )} />
)