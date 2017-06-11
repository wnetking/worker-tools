import React, { Component } from 'react'

let style = {
}

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className={`side-bar ${this.props.className}`} style={style}>
                {this.props.children}
            </aside>
        )
    }
}