import React, { Component } from 'react'
import SideBar from './SideBar'
import Menu from './Menu'

let style = {
    minHeight: '100vh',
    paddingTop: '20px'
}

export default class LayOut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className='layout container' style={style}>
                <div className='row'>
                    <SideBar className={'col-xs-3'}>
                        <Menu />
                    </SideBar>
                    <section className='col-xs-9'>
                        {this.props.children}
                    </section>
                </div>
            </main>
        )
    }
}